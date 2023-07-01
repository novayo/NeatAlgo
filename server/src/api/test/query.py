from . import app_test
import json
from flask import request
from common.rate_limiting import limiter
from common.return_format import success

@app_test.route("/members", methods=["GET"])
def members():
    return success(["Member0", "Member2", "Member3"])

@app_test.route("/get", methods=["GET"])
def test_get():
    return success(["gets1", "gets2", "gets3"])

@app_test.route("/post", methods=["POST"])
@limiter.limit("60 per minute")
def test_post():
    json_data = request.json

    if ("data" not in json_data):
        return json.dumps({"success": False}), 1000, {"content-type": "application/json"}
    json_data = json_data["data"]
    print(json_data)
    return success(["gets1", "gets2", "gets3"]), 200, {"content-type": "application/json"}
