from . import app_course

@app_course.route('/user')
def user_info():
    return {"data": "Hello World, This is an example of blueprint"}
