from pymongo import MongoClient
import dns
import os

class DBConnector(object):
    # Connect to MongoDB
    connection_link = os.environ.get('db_connect_info', None)
    _client = MongoClient(connection_link)
    db = _client['Fires']
    
    # Get collection from MongoDB
    col = db['fires']