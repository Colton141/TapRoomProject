import React from 'react';
import { Link } from 'react-router-dom';


function Employee(props) {

  return (
    <div>
    <style jsx>{`
      h1 {
        color: black;
        text-align: center;
        font-size: 40px;
      }
      `}</style>
      <h1>Employee</h1>
      <h1><Link to="/newkeg">New Keg</Link></h1>
      <div>
      </div>
      </div>

    );
  }



  export default Employee;
