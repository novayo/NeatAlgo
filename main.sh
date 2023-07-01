#!/bin/bash

USING_MAC=1

BASEDIR=$PWD
LOGS="$BASEDIR/logs"
CLIENT_PORT=3005
SERVER_PORT=7999 # Also change in client/package.json ["proxy"]
ENV_FOLDER="./env"
ENV_CLIENT_FOLDER="./client/src/env"
ENV_SERVER_FOLDER="./server/src/env"

# Mac
MISSED_PYTHON_PACKAGE="/Users/shiheric/Library/Python/3.9/lib/python/site-packages"

# Create logs folder
mkdir -p $LOGS

function check_client_pid() {
  local pid=$(sudo lsof -i:$CLIENT_PORT | grep node | cut -d' ' -f2- | sed -e 's/^[[:space:]]*//' | cut -d' ' -f1)
  pid=$(echo $pid | tr ' ' '\n' | sort -u | xargs ) # May have multiple result...
  echo $pid
}

function check_server_pid() {
  local pid=$(sudo lsof -i:$SERVER_PORT | grep Python | cut -d' ' -f2- | sed -e 's/^[[:space:]]*//' | cut -d' ' -f1)
  pid=$(echo $pid | tr ' ' '\n' | sort -u | xargs ) # May have multiple result...
  echo $pid
}

function check_client_alive() {
  local pid=$(check_client_pid)
  if [ -z "$pid" ]
  then
    echo 0
  else
    echo 1
  fi
}

function check_server_alive() {
  local pid=$(check_server_pid)
  if [ -z "$pid" ]
  then
    echo 0
  else
    echo 1
  fi
}

function start_client() {
  # 啟動frontend
  cd client
  sudo nohup sh -c "PORT=$CLIENT_PORT npm start" >$LOGS/client.txt 2>&1 &

  # Wait for client start
  while [ "$(check_client_alive)" -eq "0" ]; do sleep 1; done
  echo "Client starts instance: $(check_client_pid)." 

  cd .. 
}

function stop_client() {
  if [ "$(check_client_alive)" -eq "0" ]; then
    echo "[Warning] Client doent's start"
    return
  fi

  pids=$(check_client_pid)
  for pid in $pids
  do
    kill -9 $pid
    echo "Client stops instance: $pid."
  done
}

function start_server() {
  cd server/src
  if [ "$USING_MAC" -eq "1" ]; then
    sudo nohup sh -c "whereis python3 && python3 main.py -p $SERVER_PORT -m /Users/shiheric/Library/Python/3.9/lib/python/site-packages" >"$LOGS/server.txt" 2>&1 &
  fi

  # Wait for server start
  while [ "$(check_server_alive)" -eq "0" ]; do sleep 1; done
  echo "Server starts instance: $(check_server_pid)."

  cd ../..
}

function stop_server() {
  if [ "$(check_server_alive)" -eq "0" ]; then
    echo "[Warning] Server doent's start"
    return
  fi

  pids=$(check_server_pid)
  for pid in $pids
  do
    kill -9 $pid
    echo "Server stops instance: $pid."
  done
}

function syncEnvFile() {
  mkdir -p $ENV_CLIENT_FOLDER
  mkdir -p $ENV_SERVER_FOLDER

  cp -rf "$ENV_FOLDER/." $ENV_CLIENT_FOLDER
  cp -rf "$ENV_FOLDER/." $ENV_SERVER_FOLDER

  echo "Sync env files to client and server".
}

function removeEnvFile() {
  rm -rf $ENV_CLIENT_FOLDER
  rm -rf $ENV_SERVER_FOLDER

  echo "Remove env files to client and server".
}

# usage function
function usage()
{
	cat << HEREDOC
Usage: main.sh [-s] [-e]

optional arguments:
  -s                   Start client and server.
  -e                   Stop client and server.
  -sync-env            Sync env files to client and server.
  -remove-env          Remove env files to client and server.
HEREDOC
}

while [[ $# -gt 0 ]]; do
  case $1 in
    -s)
      syncEnvFile
      start_client
      start_server
      shift
      ;;
    -e)
      stop_client
      stop_server
      removeEnvFile
      shift
      ;;
    -sync-env)
      syncEnvFile
      shift
      ;;
    -remove-env)
      removeEnvFile
      shift
      ;;
    -h|--help)
      usage
      exit 0
      shift
      ;;
    *)
			echo "Unknown option: $1"
			exit 1
			;;
	esac
done

# 啟動backend
