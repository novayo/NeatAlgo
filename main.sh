#!/bin/bash

DEBUG=1

ON_MAC=0
ON_WIN=1

BASEDIR=$PWD
LOGS="$BASEDIR/logs"
CLIENT_PORT=3005
SERVER_PORT=7999 # Also change in client/package.json ["proxy"]
ENV_FOLDER="./env"
ENV_CLIENT_FOLDER="./client/src/env"
ENV_SERVER_FOLDER="./server/src/env"

# Mac
if [ "$ON_MAC" -eq "1" ]; then
  PYTHON_LIB="python3"
  MISSED_PYTHON_PACKAGE="-m /Users/shiheric/Library/Python/3.9/lib/python/site-packages"
  SUDO="sudo"
fi

# Win
if [ "$ON_WIN" -eq "1" ]; then
  PYTHON_LIB="python"
  MISSED_PYTHON_PACKAGE=""
  SUDO=""
fi


# Create logs folder
mkdir -p $LOGS

function check_client_pid() {
  if [ "$ON_WIN" -eq "1" ]; then
    return
  fi
  local pid=$($SUDO lsof -i:$CLIENT_PORT | grep node | cut -d' ' -f2- | sed -e 's/^[[:space:]]*//' | cut -d' ' -f1)
  pid=$(echo $pid | tr ' ' '\n' | sort -u | xargs ) # May have multiple result...
  echo $pid
}

function check_server_pid() {
  if [ "$ON_WIN" -eq "1" ]; then
    return
  fi
  local pid=$($SUDO lsof -i:$SERVER_PORT | grep Python | cut -d' ' -f2- | sed -e 's/^[[:space:]]*//' | cut -d' ' -f1)
  pid=$(echo $pid | tr ' ' '\n' | sort -u | xargs ) # May have multiple result...
  echo $pid
}

function check_client_alive() {
  if [ "$ON_WIN" -eq "1" ]; then
    echo 1
    return
  fi
  local pid=$(check_client_pid)
  if [ -z "$pid" ]
  then
    echo 0
  else
    echo 1
  fi
}

function check_server_alive() {
  if [ "$ON_WIN" -eq "1" ]; then
    echo 1
    return
  fi
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
  if [ "$1" -eq "1" ]; then
    $SUDO sh -c "PORT=$CLIENT_PORT REACT_APP_DEBUG=$DEBUG npm start"
  else
    $SUDO nohup sh -c "PORT=$CLIENT_PORT REACT_APP_DEBUG=$DEBUG npm start" >$LOGS/client.txt 2>&1 &
  fi

  # Wait for client start
  while [ "$(check_client_alive)" -eq "0" ]; do sleep 1; done
  echo "Client starts instance: $(check_client_pid)." 

  cd $BASEDIR 
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

  if [ "$1" -eq "1" ]; then
    $SUDO sh -c "$PYTHON_LIB main.py -p $SERVER_PORT $MISSED_PYTHON_PACKAGE"
  else
    $SUDO nohup sh -c "$PYTHON_LIB main.py -p $SERVER_PORT $MISSED_PYTHON_PACKAGE" >"$LOGS/server.txt" 2>&1 &
  fi

  # Wait for server start
  while [ "$(check_server_alive)" -eq "0" ]; do sleep 1; done
  echo "Server starts instance: $(check_server_pid)."

  cd $BASEDIR
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

function install_server() {
  cd server

  pip install -r requirements.txt

  cd $BASEDIR
}

# usage function
function usage()
{
	cat << HEREDOC
Usage: main.sh [-s] [-e]

optional arguments:
  -e                   Stop client and server.
  -i, --install        Install python and react libraries
  -c, --clean          Remove env files.
  -s                   Start client and server.
  -sc                  Start client only.
  -ss                  Start server only.
  --sync-env            Sync env files to client and server.
HEREDOC
}

while [[ $# -gt 0 ]]; do
  case $1 in
    -e)
      stop_client
      stop_server
      removeEnvFile
      shift
      ;;
    -h|--help)
      usage
      exit 0
      shift
      ;;
    -i|--isntall)
      install_server
      exit 0
      shift
      ;;
    -c|--clean)
      removeEnvFile
      shift
      ;;
    -s)
      syncEnvFile
      start_client
      start_server
      shift
      ;;
    -sc)
      syncEnvFile
      start_client 1
      shift
      ;;
    -ss)
      syncEnvFile
      start_server 1
      shift
      ;;
    --sync-env)
      syncEnvFile
      shift
      ;;
    *)
			echo "Unknown option: $1"
			exit 1
			;;
	esac
done
