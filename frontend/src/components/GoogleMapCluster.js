import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import APIConnection from './APIConnection.js';
import axios from 'axios';
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

class GoogleMapCluster extends React.Component {

    state = {
        markers: []
    }
   
    componentDidMount(){
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/markers')
            .then((response) => {
                this.setState({markers: response.data});
        });
      }
    
    render(){
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;

        const GoogleCluster = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 39.82830, lng: -98.57950}}
                defaultZoom = { 4 }
            >
                <MarkerClusterer
                    averageCenter
                    enableRetinaIcons
                    gridSize={60}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            key={marker.id}
                            position={{ lat: marker.latitude, lng: marker.longitude }}
                        />
                    ))}
                </MarkerClusterer>
            </GoogleMap>
         ));

        return (
            <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area"></i>
                &nbsp; Google Map Clusters</div>
            <div className="card-body mx-auto"  style={{height: '500px', width: '700px'}}>
                <GoogleCluster
                    containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
            <div className="card-footer small text-muted text-right">Updated { dateTime }</div>
            </div>
        );
    }
}

export default GoogleMapCluster;
