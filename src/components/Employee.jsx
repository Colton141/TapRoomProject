import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <style jsx>{`
        h1 {
          color: white;
          text-align: center;
          font-size: 40px;
        }
      `}</style>
      <div>
        <h1>Tap Room</h1>
        <Link to="/">Home</Link> | <Link to="/keglist">Keg List</Link> | <Link to="/newkeg">New Keg</Link>
      </div>
    </div>

  );
}

export default Header;
