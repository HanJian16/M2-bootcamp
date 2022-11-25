import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>Search Bar Component
    <hr />
    <input type="text" placeholder='Ciudad'/>
    <button onClick={()=>props.onSearch('Miami')}>Search</button>
  </div>
};