import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`


          var KegSyle = {
            minHeight: '150px',
            borderRadius: '5px',
            backgroundColor: '#edeff1',
            paddingBottom: "2%",
            marginBottom: "2%"
          }
          var KegHeader = {
            padding: '1px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            backgroundColor: '#a08db5',
            color: 'white',
            fontSize: '10px'
          }
      `}</style>
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
  brand: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
  alcoholContent: PropTypes.array.isRequired,
};

export default Keg;
