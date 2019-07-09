import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {

     name, brand, price and alcoholContent

    name: 'PBR',
    brand: 'PBR',
    price: '6',
    alcoholContent: '4.5'
  },
  {
    name: 'Coors Lite',
    brand: 'Coors',
    price: '6',
    alcoholContent: '4.2'
  },
  {
    name: 'Miller Lite',
    brand: 'Miller',
    price: '6',
    alcoholContent: '4.2'
  },
  {
    name: 'Blue Moon',
    brand: 'Blue Moon',
    price: '8',
    alcoholContent: '5.4'
  },
  {
    name: 'Amber Ale',
    brand: 'Fat Tire',
    price: '9',
    alcoholContent: '5.6'
  },
  {
    name: 'Rainier',
    brand: 'Rainier',
    price: '8',
    alcoholContent: '4.6'
  },
  {
    name: 'Bud Ligh',
    brand: 'Budwieser',
    price: '5',
    alcoholContent: '6'
  }
];

function KegList() {
  return (
    <div>
      <hr />
      {masterKegList.map((produce, index) =>
        <Keg name={produce.name}
          brand={produce.brand}
          key={index} />
      )}
    </div>
  );
}

export default KegList;
