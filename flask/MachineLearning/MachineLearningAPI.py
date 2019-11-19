
class MachineLearningAPI():

    @classmethod
    def prediction(cls, month, dayofweek, latitude, longitude):
        return {'natural': 5, 'malicious': 3, 'accidental': 2, 'other': 7}