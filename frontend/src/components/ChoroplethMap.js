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
import { scaleLinear } from "d3-scale"
import usaJSON from "../assets/states-10m.json"
import APIConnection from './APIConnection.js';

class ChoroplethMap extends React.Component {
    
    state = {
        data: null,
        content: "",
        STATE: ""
    }

    minValue = 0
    maxValue = 5000

    minColor = "#FFD3D3"
    maxColor = "#FF0000"

    customScale = scaleLinear()
    .domain([this.minValue,this.maxValue])
    .range([this.minColor,this.maxColor])

    getValue = (name) => {
        let data = this.state.data;
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
                this.setState({ data : response.data })
                this.forceUpdate()
        });
      }

    getFill = (geography) => {
        return this.state.data ? this.customScale(this.getValue(geography.properties.name)*0.05) : "#808080"
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
                    <Geographies geography={usaJSON} disableOptimization>  
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
                                        fill: this.getFill(geography),
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "#6fc987",
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
