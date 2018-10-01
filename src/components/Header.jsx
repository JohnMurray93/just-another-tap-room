import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Just Another Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add Keg</Link>
    </div>
  );
}

export default Header;