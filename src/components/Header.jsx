import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <style jsx>{`
        h1 {
          color: black;
          text-align: center;
          font-size: 40px;
        }
      `}</style>
      <div>
        <h1>Tap Room</h1>
        <Link to="/">Home</Link>| <Link to="/employee">Employee</Link>
      </div>
    </div>
  );
}

export default Header;
