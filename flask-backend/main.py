import flask
import requests
import time
import random
from cloud_api import Analyzer

app = flask.Flask("__main__")

@app.route("/", methods=["POST", "GET"])
def my_index():
    return flask.render_template("index.html")

@app.route("/sentiment", methods=["POST", "GET"])
def get_sentiment():
    if(flask.request.method == "POST"):
        analyzer = Analyzer()

        request_json = flask.request.get_json()

        chat = request_json.get("chat")

        if(chat == ""):
            return {'sentiment': 0,
                    'verdict': "???"}

        result = analyzer.analyze_sentiment(chat)

        return {'sentiment': result["docscore"],
                'verdict': result["verdict"]}
    return {'sentiment': 0,
            'verdict': "???"}

if(__name__ == '__main__'):
    app.run(debug=True)
