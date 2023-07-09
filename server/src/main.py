import argparse
parser = argparse.ArgumentParser(
    formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("-p", "--port", dest="port", type=int,
                    required=True, help="Server Port")
parser.add_argument("-m", dest="missed_python_module", type=str,
                    required=False, help="Include python module if needed")
args = parser.parse_args()

from os.path import realpath
import sys
sys.path.append(realpath(__file__))
# In mac, run python by script will miss python module
if (args.missed_python_module):
    sys.path.append(args.missed_python_module)

from flask import Flask, redirect
from common.rate_limiting import limiter
from api.course import app_course
from api.test import app_test
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(app_course, url_prefix="/course")
app.register_blueprint(app_test, url_prefix="/test")
limiter.init_app(app)

# TODO: 加入自己網站的網址
CORS(app, resources={r"/.*": {"origins": ["http://127.0.0.1"]}})

@app.errorhandler(404)
def page_not_found(e):
    return redirect("/", code=404)

if __name__ == "__main__":
    app.run(host="localhost", port=args.port, debug=True)
