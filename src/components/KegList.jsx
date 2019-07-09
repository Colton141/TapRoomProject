import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {

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
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index} />
          <button>Edit</button>
      )}
    </div>
  );
}

export default KegList;
