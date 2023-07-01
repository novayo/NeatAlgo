import argparse
parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("-p", "--port", dest="port", type=int, required=True, help="Server Port")
parser.add_argument("-m", dest="missed_python_module", type=str, required=False, help="Include python module if needed")
args = parser.parse_args()

import sys
if (args.missed_python_module):
    sys.path.append(args.missed_python_module)

from flask import Flask

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["Member0", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(host="localhost", port=args.port, debug=True)
