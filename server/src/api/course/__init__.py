from flask import Blueprint
 
app_course = Blueprint('app_course', __name__)

from . import user_info
