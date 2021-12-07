import React from 'react'
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {
    //extraer valores 
    const {name,main,weather} = resultado

    if(!name) return null;

    //grados kelvin 
    const kelvin =273.15

    const urlIcon=`http://openweathermap.org/img/wn/${weather[0].icon}.png`
    return (
        <div className='card-panel  col s12 grey '> 
        <div className='black-text'>
            <h2>El clima de {name} es: </h2>
            <h2 className='png' ><img src={urlIcon} alt="" />  {weather[0].description}</h2>
            <p className='temperatura' >
                
                {parseFloat(main.temp - kelvin,10).toFixed(1)} <span>&#x2103;</span>                 
            </p>
            <p> Humedad: <br/>
                {main.humidity} <span> %</span>
            </p>
            
            <p> Temperatura Maxima:
                {parseFloat(main.temp_max - kelvin,10).toFixed(1)} <span>&#x2103;</span>
            </p>
            <p> Temperatura Minima:
                {parseFloat(main.temp_min - kelvin,10).toFixed(1)} <span>&#x2103;</span>
            </p>
        </div>
        </div>
    )
}

Clima.propTypes ={
    resultado: PropTypes.object.isRequired
}

export default Clima
