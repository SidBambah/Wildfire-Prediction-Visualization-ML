from flask import Flask, Response, request
from Visualization.VisualizationAPI import VisualizationAPI as vis_tools
from MachineLearning.MachineLearningAPI import MachineLearningAPI as ml_tools
import json

app = Flask(__name__)

@app.route("/api/visualization/wordcloud", methods=["GET"])
def wordcloud_data():
    rsp_data = vis_tools.wordcloud()
    rsp_status = 200
    full_rsp = Response(json.dumps(rsp_data, default=str),
                            status=rsp_status, content_type="application/json", headers={"Access-Control-Allow-Origin": "*"})
    return full_rsp

@app.route("/api/visualization/barchart", methods=["GET"])
def barchart_data():
    rsp_data = vis_tools.barchart()
    rsp_status = 200
    full_rsp = Response(json.dumps(rsp_data, default=str),
                            status=rsp_status, content_type="application/json")
    return full_rsp

@app.route("/api/visualization/donutchart", methods=["GET"])
def donutchart_data():
    rsp_data = vis_tools.donutchart()
    rsp_status = 200
    full_rsp = Response(json.dumps(rsp_data, default=str),
                            status=rsp_status, content_type="application/json", headers={"Access-Control-Allow-Origin": "*"})
    return full_rsp

@app.route("/api/visualization/correlation", methods=["GET"])
def correlation_data():
    rsp_data = vis_tools.correlationmatrix()
    rsp_status = 200
    full_rsp = Response(json.dumps(rsp_data, default=str),
                            status=rsp_status, content_type="application/json")
    return full_rsp

@app.route("/api/prediction", methods=["GET"])
def prediction():
    rsp_data = ml_tools.prediction()
    rsp_status = 200
    full_rsp = Response(json.dumps(rsp_data, default=str),
                                status=rsp_status, content_type="application/json")
    return full_rsp

if __name__ == '__main__':
    app.run(debug=True)