import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>

      <div>
      <h2>{props.name}</h2>
      <h4>{props.brand}</h4>
      <h4>{props.price}</h4>
      <h4>{props.alcoholContent}</h4>


      <br />
      </div>
      <hr />
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired,
  };

  export default Keg;
