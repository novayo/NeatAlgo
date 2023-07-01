from flask import Blueprint
 
app_test = Blueprint('app_test', __name__)

from . import query
