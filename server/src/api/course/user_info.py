from . import app_course
from flask import request
from common.return_format import success_post, failed_post

@app_course.route("/user", methods=["GET"])
def user_info():
    json_data = request.headers
    
    if "username" not in json_data:
        return failed_post(1001)

    print(json_data["username"])
    # do the query here

    return success_post({"vip": True, "finish_course": [True, True, False]})
