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
                    'verdict': "???",
                    'worstScore':[],
                    'worstSentence':[],
                    'keywords':[]}

        analyzer.analyze_entities(chat)
        analyzer.analyze_sentiment(chat)

        result = analyzer.result


        return {'sentiment': result["docscore"],
                'verdict': result["verdict"],
                'worstScore': result["worstSco"],
                'worstSentence': result["worstSent"],
                'keywords': result["entities"]}
    return {'sentiment': 0,
            'verdict': "???",
            'worstScore': [],
            'worstSentence': [],
            'keywords': []}

if(__name__ == '__main__'):
    app.run(debug=True)
