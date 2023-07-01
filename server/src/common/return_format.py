def success(data):
    ret = {"success": True}
    if data:
        ret["data"] = data
    return ret
