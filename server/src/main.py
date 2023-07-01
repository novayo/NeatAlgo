
import argparse
parser = argparse.ArgumentParser(
    formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("-p", "--port", dest="port", type=int,
                    required=True, help="Server Port")
parser.add_argument("-m", dest="missed_python_module", type=str,
                    required=False, help="Include python module if needed")
args = parser.parse_args()

import sys
# In mac, run python by script will miss python module
if (args.missed_python_module):
    sys.path.append(args.missed_python_module)

import json
from flask import Flask, request, jsonify, redirect
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["60 per minute"]
)


@app.route("/members", methods=["GET"])
def members():
    return {"data": ["Member0", "Member2", "Member3"]}


@app.route("/test/get", methods=["GET"])
def test_get():
    return {"data": ["gets1", "gets2", "gets3"]}


@app.route("/test/post", methods=["POST"])
@limiter.limit("60 per minute")
def test_post():
    json_data = request.json

    if ("data" not in json_data):
        return json.dumps({"success": False}), 1000, {"content-type": "application/json"}
    json_data = json_data["data"]
    print(json_data)
    return json.dumps({"success": True}), 200, {"content-type": "application/json"}

@app.errorhandler(404)
def page_not_found(e):
    return redirect("/", code=404)

if __name__ == "__main__":
    app.run(host="localhost", port=args.port, debug=True)
