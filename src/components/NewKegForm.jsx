import React from 'react';
import { Link } from 'react-router-dom';

function NewKegForm(props){
  let _names = null;
  let _brand = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _names.value, brand: _brand.value, price: _price.value, alcoholContent: _alcohholContent.value, id: v4()});
    _names.value = '';
    _brand.value = '';
    _price.value = '';
    _alcohholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Location'
          ref={(input) => {_brand = input;}} />
        <textarea
          id='price'
          placeholder='Describe your price.'
          ref={(textarea) => {_price = textarea;}} />
          <input
            type='text'
            id='brand'
            placeholder='Location'
            ref={(input) => {_alcohholContent = input;}} />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKeg;
