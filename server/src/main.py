import argparse
parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("-p", "--port", dest="port", type=int, required=True, help="Server Port")
parser.add_argument("-m", dest="missed_python_module", type=str, required=False, help="Include python module if needed")
args = parser.parse_args()

# In mac, run python by script will miss python module
import sys
if (args.missed_python_module):
    sys.path.append(args.missed_python_module)

import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/members", methods=["GET"])
def members():
    return {"data": ["Member0", "Member2", "Member3"]}

@app.route("/test/get", methods=["GET"])
def test_get():
    return {"data": ["gets1", "gets2", "gets3"]}

@app.route("/test/post", methods=["POST"])
def test_post():
    json_data = request.json

    if ("data" not in json_data):
        return json.dumps({"success":False}), 1000, {"content-type":"application/json"} 
    json_data = json_data["data"]
    print(json_data)
    return json.dumps({"success":True}), 200, {"content-type":"application/json"} 

if __name__ == "__main__":
    app.run(host="localhost", port=args.port, debug=True)
