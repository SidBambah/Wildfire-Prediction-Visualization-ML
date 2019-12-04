from DataAccess.DBConnector import DBConnector as db
import json
from Helper.us_state_abbrev import abbrev_us_state
import random
class VisualizationAPI():
    _fire_collection = db.col

    @classmethod
    def wordcloud(self, parameter):
        doc = self._fire_collection.aggregate([
            {"$group" : {"_id":"$" + parameter, "count":{"$sum":1}}},
            {"$sort": {"count":-1}}
        ])
        result =  [x for x in doc]
        
        # Processing Dict into properly named keys
        for i in range(len(result)):
            result[i]['text'] = str(result[i].pop('_id'))
            result[i]['value'] = int(result[i].pop('count'))
        if result[0]['text'] == 'nan':
            result.pop(0)
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
            labels.append(str(result[i]["_id"]))
            data.append(int(result[i]["count"]))
        if labels[0] == "nan":
            labels.pop(0)
            data.pop(0)
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
    def markers(self):
        tempResult = []
        # Only send ~500k points so browser can display clusters
        for i in range(6):
            print(i)
            docs = list(self._fire_collection.aggregate([{"$project": {"LATITUDE": 1, "LONGITUDE": 1}},\
            {"$sample": {"size": 90000}}]))
            tempResult = tempResult + docs
        result = []
        for i in range(len(tempResult)):
            try:
                result.append({'latitude': float(tempResult[i]['LATITUDE']), 'longitude': float(tempResult[i]['LONGITUDE']), 'id': int(abs(hash(tempResult[i]['_id'])))})
            except:
                pass
        return result

    @classmethod
    def datatable(self):
        # Choose 100 random rows
        # Note: Can and should be updated for different use cases
        result = list(self._fire_collection.aggregate([{"$project": {"STATE": 1, "STAT_CAUSE_DESCR": 1,
        "NWCG_REPORTING_UNIT_NAME": 1, "FIRE_NAME": 1, "MONTH": 1, "DAY_OF_WEEK": 1}},
        {"$sample": {"size": 1000}}]))
        result = [{'STATE': str(d['STATE']), 'STAT_CAUSE_DESCR': str(d['STAT_CAUSE_DESCR']),
        'NWCG_REPORTING_UNIT_NAME': str(d['NWCG_REPORTING_UNIT_NAME']), 'FIRE_NAME': str(d['FIRE_NAME']),
        'MONTH': str(d['MONTH']), 'DAY_OF_WEEK': str(d['DAY_OF_WEEK'])} for d in result]
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