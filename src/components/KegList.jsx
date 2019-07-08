import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {

     name, brand, price and alcoholContent

    name: 'January',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'February',
    brand: [],
    price: ,
    alcoholContent: 
  },
  {
    name: 'March',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'April',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'May',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'June',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'July',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'August',
    brand: [  ],
    price: ,
    alcoholContent: 
  },
  {
    name: 'September',
    brand: [  ],
    price: ,
    alcoholContent: 
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
