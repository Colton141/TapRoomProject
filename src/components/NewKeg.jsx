import React from 'react';
import { Link } from 'react-router-dom';

function NewKeg(){
  return (
    <div>
      <h1>New Keg</h1>
      <form>
        <input type='text' id='name' placeholder='NAME'/>
        <input type='text' id='brand' placeholder='BRAND'/>
        <input type='text' id='price' placeholder='PRICE'/>
        <input type='text' id='alcoholContent' placeholder='ALCOHOLCONTENT'/>
        <Link to="/"><button type='submit'>Add Keg</button></Link>
      </form>
    </div>
  );
}

export default NewKeg;
