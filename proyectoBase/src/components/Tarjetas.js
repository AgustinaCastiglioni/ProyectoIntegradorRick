import React from 'react';

function Tarjeta(props) {
    return (
        
        <div class="cuerpo">
            <div class="uk-card uk-card-default uk-card-body card">
       
            <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={props.infoTarjetas.image} alt=""/>
                </div>
                <div class="uk-card-body info">
                <h3 class="uk-card-title" style={{color: "blue"}}> {props.infoTarjetas.name}</h3>
                <p>{props.infoTarjetas.status} - {props.infoTarjetas.species}</p>
                <p>{props.infoTarjetas.origin.name}</p>
                </div>
            </div>
        </div>
        </div>
   
   
  
    
    );
  }
  
  export default Tarjeta;