import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (<div>Cards components
    {
      props.cities.map(carta => (
        <Card 
        max ={carta.main.temp_max}
        min={carta.main.temp_min}
        name={carta.name}
        img={carta.weather[0].icon}
        onClose={() => alert(carta.name)}
        />
      ))
    }
  </div>)
};