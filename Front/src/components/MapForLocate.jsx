import React, { useEffect, useState } from 'react';
import { Map, ZoomControl, Draggable} from "pigeon-maps";
import { osm } from 'pigeon-maps/providers';import PigeonIcon from './pigeon';
;


const MapForLocate = ({cbFunction}) => {
    const [point, setPoint]=useState([35.100, 51.500]);
    useEffect(()=>{cbFunction(point)},[point])
    


  return (
    <Map  provider={osm} height={300} defaultCenter={[35.7396, 51.4749]} defaultZoom={11} animate={true} >
    <ZoomControl/>
    <Draggable offset={[60, 87]} anchor={point} onDragEnd={setPoint}>
       <PigeonIcon/>
    </Draggable>
    </Map>
  )
}

export default MapForLocate;
