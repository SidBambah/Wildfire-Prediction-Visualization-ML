from DataAccess.DBConnector import DBConnector as db
import json

class VisualizationAPI():
    _fire_collection = db.col

    @classmethod
    def wordcloud(self):
        doc = self._fire_collection.aggregate([
            {"$group" : {"_id":"$STATE", "count":{"$sum":1}}}
        ])
        result =  [x for x in doc]

        # Removing unlabeled values
        result = list(filter(lambda x: len(x["_id"]) == 2, result))

        # Processing Dict into properly named keys
        for i in range(len(result)):
            result[i]['text'] = result[i].pop('_id')
            result[i]['value'] = result[i].pop('count')

        return result

    @classmethod
    def barchart(self):
        return "Barchart stuff"

    @classmethod
    def donutchart(self):
        doc = self._fire_collection.aggregate([
            {"$group" : {"_id":"$STAT_CAUSE_DESCR", "count":{"$sum":1}}}
        ])
        result =  [x for x in doc]
        labels = []
        data = []
        for i in range(len(result)):
            labels.append(result[i]["_id"])
            data.append(result[i]["count"])
        result = {"labels": labels, "data": data}
        return result

    @classmethod
    def correlationmatrix(self):
        return "Correlation matrix stuff"