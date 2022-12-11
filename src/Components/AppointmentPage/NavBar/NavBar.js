import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a className="nav-link ms-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Dental Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5 text-light" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5 text-light" href="#">Blog</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-5 text-light" href="#">Contact Us</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;