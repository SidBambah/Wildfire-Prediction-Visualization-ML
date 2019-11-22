from boto3 import client
import joblib
import os
from io import BytesIO

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID', None)
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY', None)
BUCKET_NAME = os.environ.get('BUCKET_NAME', None)
MODEL_FILE_NAME = os.environ.get('MODEL_FILE_NAME', None)
MODEL_LOCAL_PATH = '/tmp/' + MODEL_FILE_NAME

def load_model():
    # Connect to S3 Bucket
    conn = client(
        's3',
        'us-east-1',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    )

    response = conn.get_object(Bucket=BUCKET_NAME, Key=MODEL_FILE_NAME)
    
    # Load model from temp directory
    model = joblib.load(BytesIO(response['Body'].read()))
    return model