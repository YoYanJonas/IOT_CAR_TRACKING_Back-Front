import React, { useState } from "react";
import { Map, ZoomControl , Marker} from "pigeon-maps";
import { osm } from 'pigeon-maps/providers';


export const PigeonMap = ({markers})=>{
    const[info,setInfo]=useState(false);
    const [name, setName]=useState("");
    const [code, setCode]=useState("");
    const [latitude, setLatitude]=useState(0);
    const [longitude, setLongitude]=useState(0);
    const clickHandler=(markerIdx)=>{
        setName(markers[markerIdx]["name"])
        setCode(markers[markerIdx]["code"])
        setLatitude(markers[markerIdx]["latitude"])
        setLongitude(markers[markerIdx]["longitude"])

        setInfo(true);
    }
        

    const closeHandler=()=>{
        setInfo(false);
    }

    return(
     <React.Fragment>
         <Map  provider={osm} height={300} defaultCenter={[35.7396, 51.4749]} defaultZoom={11} animate={true} >
            <ZoomControl/>
            {markers.map((marker,idx)=>{
            const latitude = marker["latitude"];
            const longitude =  marker["longitude"];
            console.log(latitude)
            return(
            <Marker
            key={idx} 
            width={50}
            anchor={[latitude, longitude]}
            onClick={()=>clickHandler(idx)}/>)
          })}
         </Map>
         {info && (
            <article class="message is-link">
            <div class="message-header">
                <p>Gadget Information</p>
                <button onClick={closeHandler} class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
            <div class="block">
                Name:<strong>{name}</strong>.
            </div>
            <div class="block">
                Code:<strong>{code}</strong>.
            </div>
            <div class="block">
                Latitude:<strong>{latitude}</strong>.
            </div>
            <div class="block">
                Longitude:<strong>{longitude}</strong>.
            </div>
            </div>
            </article>
         )}
         
     </React.Fragment>
  )}
  