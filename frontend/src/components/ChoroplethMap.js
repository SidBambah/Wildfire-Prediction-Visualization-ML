import React from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
  } from "react-simple-maps"
import ReactTooltip from "react-tooltip";
import axios from 'axios';
import {geoAlbersUsa} from "d3-geo";
import usaJSON from "../assets/states-10m.json"
import APIConnection from './APIConnection.js';


class ChoroplethMap extends React.Component {
    data = []
    
    state = {
        content: "",
        STATE: ""
    }

    getValue = (name) => {
        let data = this.data;
        let i;
        for(i = 0; i < data.length; i++){
            if (data[i]['STATE'] === name){
                return data[i]['COUNT']
            }
        }
        return "Unknown"
    }

    componentDidMount(){
        //Axios Get Request
        axios.get(APIConnection["endpoint"] + '/visualization/choropleth')
            .then((response) => {
                this.data= response.data
        });
      }

    render(){
        var updateTime = new Date();
        var date = updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate();
        var time = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
        var dateTime = date+' '+time;
        return (
            <div className="card mb-3">
                <div className="card-header"> <i className="fas fa-chart-area"></i> Choropleth Map</div>
          <div className="card-body mx-auto">
            <div className="map-container" data-tip="">
                <ComposableMap
                    projection={geoAlbersUsa}
                    projectionConfig={{ scale: 1000 }}
                    width={980}
                    height={551}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <ZoomableGroup center={[ -97, 40 ]} disablePanning>
                    <Geographies geography={usaJSON}>  
                        {(geographies, projection) =>
                            geographies.map((geography, i) =>
                            <Geography
                                key={i}
                                geography={geography}
                                projection={projection}
                                onMouseEnter={() => {
                                    const { name } = geography.properties;
                                    this.setState({content: this.getValue(name)});
                                    this.setState({STATE: name});
                                }}
                                style={{
                                    default: {
                                        fill: "#ECEFF1",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "#FF5722",
                                        stroke: "#607D8B",
                                        strokeWidth: 1,
                                        outline: "none",
                                    }
                                }}
                            />
                            )
                        }
                    </ Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <ReactTooltip place="top" type="dark">Fires in {this.state.STATE}: {this.state.content}</ReactTooltip>
            </div>
          </div>
          <div className="card-footer small text-muted text-right">Updated {dateTime}</div>
        </div>
        );
    }
}

export default ChoroplethMap;
