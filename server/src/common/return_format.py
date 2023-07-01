import json

def success_get(data):
    ret = {"success": True}
    if data:
        ret["data"] = data
    return ret

def success_post(data):
    ret = {"success": True}
    if data:
        ret["data"] = data
    return ret, 200, {"content-type": "application/json"}

def failed_post(err_code):
    return json.dumps({"success": False}), err_code, {"content-type": "application/json"}
