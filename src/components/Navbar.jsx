import React from 'react'
import './Navbar.css'
import logo from '../images/logo.jpg'
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div class="top navtop">
           <div class="head">
                 <h6><center>Get Flat 10% cashback upto 500 on Snapmint. T&C Apply* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </center></h6>
           </div>
           <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} class="navimg"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="nav-link" aria-current="page" href="#">
            <Link to='/'><li><div class="nm">Home</div></li></Link>
            </div>
        </li>
         <li class="nav-item">
          <div class="nav-link" href="#">
           <Link to='/watches'><li> <div class="nm">Watches</div> </li></Link>
            </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" href="#">
            <Link to='/smartwatch'><li><div class="nm">Smartwatch</div></li></Link>
            </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" href="#">
            <Link to='/access'><li><div class="nm">Accessories</div></li></Link>
            </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" href="#">
            <Link to='/more'><li><div class="nm">More..</div></li></Link>
            
            </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu">
            <li><div class="dropdown-item" href="#">
              <Link to='/upload'><li><div class="">Upload</div></li></Link>
              </div></li>
            <li><div class="dropdown-item" href="#">
              <Link to='/update'><li><div class="">Update</div></li></Link>
              </div></li>
             
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="icons">
        <FaSearch class="i"/><FaRegHeart class="i" /><HiOutlineShoppingBag class="i"/>

      </div>
    </div>
  </div>
</nav>

        </div>
    </>
  )
}

export default Navbar