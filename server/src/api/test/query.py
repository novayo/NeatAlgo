from . import app_test
from flask import request
from common.rate_limiting import limiter
from common.return_format import success_get, success_post, failed_post

@app_test.route("/members", methods=["GET"])
def members():
    return success_get(["Member0", "Member2", "Member3"])

@app_test.route("/get", methods=["GET"])
def test_get():
    return success_get(["gets1", "gets2", "gets3"])

@app_test.route("/post", methods=["POST"])
@limiter.limit("60 per minute")
def test_post():
    json_data = request.json
    if ("data" not in json_data):
        return failed_post(1000)

    json_data = json_data["data"]
    print(json_data)
    return success_post(["gets1", "gets2", "gets3"])
