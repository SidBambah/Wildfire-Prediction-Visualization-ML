from DataAccess.DBConnector import DBConnector as db
import json
from Helper.us_state_abbrev import abbrev_us_state
class VisualizationAPI():
    _fire_collection = db.col

    @classmethod
    def wordcloud(self, parameter):
        doc = self._fire_collection.aggregate([
            {"$group" : {"_id":"$" + parameter, "count":{"$sum":1}}}
        ])
        result =  [x for x in doc]
        
        # Processing Dict into properly named keys
        for i in range(len(result)):
            result[i]['text'] = result[i].pop('_id')
            result[i]['value'] = result[i].pop('count')

        return result


    @classmethod
    #Can give two parameters. First is parameter of interest, second is fixed parameter.
    #If second parameter is given, result is for first param given second param is fixed.
    def barchart(self, limit, parameter1, parameter2, matchValue):
        if not (parameter2 == "false"):
            doc = self._fire_collection.aggregate([
                { "$match" : { parameter2:  matchValue } },
                {"$group" : {"_id":"$"+parameter1, "count":{"$sum":1}}},
                {"$sort": {"count":-1}},
                {"$limit": limit}
            ])
        else:
            doc = self._fire_collection.aggregate([
                {"$group" : {"_id":"$"+parameter1, "count":{"$sum":1}}},
                {"$sort": {"count":-1}},
                {"$limit": limit}
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
    def donutchart(self, parameter, limit):
        if(limit.lower() != "false"):
            doc = self._fire_collection.aggregate([
                {"$group" : {"_id":"$"+parameter, "count":{"$sum":1}}},
                {"$limit": int(limit)}
            ])
        else:
            doc = self._fire_collection.aggregate([
                {"$group" : {"_id":"$"+parameter, "count":{"$sum":1}}}
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

    @classmethod
    def markers(self):
        doc = self._fire_collection.find({}, {'LATITUDE':1, 'LONGITUDE':1, "_id":1})
        tempResult =  [x for x in doc]

        # Processing Dict into properly named keys
        for i in range(len(tempResult)):
            tempResult[i]['latitude'] = tempResult[i].pop('LATITUDE')
            tempResult[i]['longitude'] = tempResult[i].pop('LONGITUDE')
            tempResult[i]['id'] = tempResult[i].pop('_id')

        result = []
        for i in range(len(tempResult)):
            try:
                result.append({'latitude': float(tempResult[i]['latitude']), 'longitude': float(tempResult[i]['longitude']), 'id': int(abs(hash(tempResult[i]['id'])))})
            except:
                pass

        return result
    
    @classmethod
    def choropleth(self):
        doc = self._fire_collection.aggregate([
                {"$group" : {"_id":"$STATE", "count":{"$sum":1}}}
            ])
        result =  [x for x in doc]
        for i in range(len(result)):
            result[i]['STATE'] = result[i].pop("_id")
            result[i]['COUNT'] = result[i].pop("count")

        # Remove Unknown state
        index = 0
        for i in range(len(result)):
            if result[i]['STATE'] == 'Unknown':
                index = i
        del result[index]

        # Map two-letter state codes into full states
        for i in range(len(result)):
            result[i]['STATE'] = abbrev_us_state[result[i]['STATE']]

        return result