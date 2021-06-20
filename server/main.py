from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>Read main.py</p>"

@app.route("/action")
def action():
    resp = {
        "data": [
            {
             "name": "Ajay",
             "age": 30
            },
            {
             "name": "Xjay",
             "age": 20
            }
        ]
    }
    return resp

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return response
