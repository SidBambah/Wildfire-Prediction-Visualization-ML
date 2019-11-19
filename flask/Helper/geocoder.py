import googlemaps
import os

key = os.environ.get('GOOGLE_API_KEY', None)
gmaps = googlemaps.Client(key=key)

def getLatLong(location):
    geocode_result = gmaps.geocode(location)
    latitude = geocode_result[0]['geometry']['location']['lat']
    longitude = geocode_result[0]['geometry']['location']['lng']
    return latitude, longitude