import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';



function KegList(props) {

  var KegStyle = {
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

  return (
    <div style={KegStyle}>
    <hr />
    <header style={KegHeader}><h3>KEGS</h3></header>
    {props.kegList.map((keg) =>
      <Keg
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      key={keg.id} />

    )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
