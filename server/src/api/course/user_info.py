from . import app_course
from flask import request, make_response
from common.return_format import success_post
from common.logger import LOG_DEBUG
import os
from common.lru_cache import cookie_cache

KEY_COOKIE_NAME = os.getenv("REACT_APP_COOKIE_NAME")
KEY_EMAIL = os.getenv("REACT_APP_COOKIE_KEY_EMAIL")
KEY_COOKIE_ID = os.getenv("REACT_APP_COOKIE_KEY_ID")

@app_course.route("/user", methods=["GET"])
def user_info():
    json_data = request.headers

    email = json_data.get(KEY_EMAIL)
    cookie_id = json_data.get(KEY_COOKIE_ID)

    LOG_DEBUG(f"Email: {email}, CookieID: {cookie_id}")

    # if user not login, return default value
    if not email:
        return success_post({"vip": False, "finish_course": [False]})

    # if cookie is not valid, remove cookie
    if cookie_cache.exist(email) and cookie_cache.get(email) != cookie_id:
        LOG_DEBUG(f"Clear cache for {email}. old_id={cookie_cache.get(email)}. new_id={cookie_id}")
        cookie_cache.remove(email)
        resp = make_response("")
        resp.delete_cookie(key=KEY_COOKIE_NAME, path="/")
        return resp

    LOG_DEBUG(f"Set cache for testing. Email: {email}, CookieID: {cookie_id}")
    if email:
        cookie_cache.set(email, cookie_id)
    # do the query here
    return success_post({"vip": True, "finish_course": [True, True, False]})
