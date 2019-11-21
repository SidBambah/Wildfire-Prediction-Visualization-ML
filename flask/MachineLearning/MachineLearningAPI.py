#from DataAccess.S3Connector import S3Connector as s3
class MachineLearningAPI():

    @classmethod
    def prediction(cls, model, month, dayofweek, latitude, longitude):
        classes = {0: "natural", 1: "accidental", 2: "malicious", 3: "other" }
        prediction = model.predict_proba([[month, latitude, longitude, dayofweek]])[0]
        result = {}
        for i in range(len(prediction)):
            result[classes[i]] = prediction[i]
        print(result)
        return {'natural': 5, 'malicious': 3, 'accidental': 2, 'other': 7}