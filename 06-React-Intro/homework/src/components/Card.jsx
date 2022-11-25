import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (<div className='cardContainner'>
    <button onClick={onClose} className='cardContainner_button'>X</button>
    <h1 className='cardContainner_h1'>{name}</h1>
    <div className='cardContainner_divP'>
      <p className='cardContainner_p'>Min Max</p>
      <p className='cardContainner_p'>{min} {max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen' className='cardContainner_img'/>
  </div>)
};