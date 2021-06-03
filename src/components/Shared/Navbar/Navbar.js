import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5">
      <li className="nav-item">
          <a className="nav-link ms-5" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Dental services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5 text-white" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5 text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5 text-white" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;