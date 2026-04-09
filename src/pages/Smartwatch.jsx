import React, { useEffect, useState } from 'react'
import './Smartwatch.css'
import { CiLocationOn } from "react-icons/ci";
import logo from '../images/logo.jpg'
import sma from '../images/sma.jpg'
import Smawatch from '../product/Smawatch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Smartwatch = () => {
   const cartProducts =useSelector((state)=>state.cart.cartItems)
  const dispatch =useDispatch();
  const addCart =(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  const[Smartwatch,setsmartwatch]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5500/watch`)
    .then((res)=>res.json())
    .then((data)=>{
      if(Array.isArray(data)){
        setsmartwatch(data)
      }
    }).catch((err)=>
    console.log(err));
  });
  return (
    <>
       <Navbar/>
      <div>
        <div class="loc"><CiLocationOn class="sl"/>
                Select a location to check product availability Add Location
                </div>
             <div class="container-fluid">
        <h5>Home/Smart Watches</h5>
         <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={sma} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={sma} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={sma} class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        <hr/>

        <h2><center>133 items found for " Smart Watches "</center></h2>
        <hr/>
      </div>
        <div class="row">
        <div class="col-2 d-block d-lg-md-none d-none d-md-block">
           <div>
            <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By:Popularity
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Relevance</a></li>
    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
    <li><a class="dropdown-item" href="#">Best Sellers</a></li>
    <li><a class="dropdown-item" href="#">Popularity</a></li>
    <li><a class="dropdown-item" href="#">Discount</a></li>
    <li><a class="dropdown-item" href="#">Price:High To Low</a></li>
    <li><a class="dropdown-item" href="#">Price:Low To High</a></li>
  </ul>
</div>
 </div><br></br>
            <div class="sidem"><h4>Screen Size</h4></div><hr/>
              <div class="sidem"><h4>Special Features</h4></div><hr/>
                <div class="sidem"><h4>Bluetooth Version</h4></div><hr/>
            <div class="sidem"><h4>Gender</h4></div><hr/>
            <div class="sidem"><h4>Strap Material</h4></div><hr/>
            <div class="sidem"><h4>Discounts</h4></div><hr/>
            <div class="sidem"><h4>Strap Color</h4></div><hr/>

        </div>
        <div class="col-10 shadow cs">
          <div class="row m-2 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
           {Smartwatch.map((item)=>(
                         <div class="col">
                <div class="card shadow cads" key={item._id}>
                <img src={item.img} class="card-img-top cads-im"/>
                  <div class="card-body">
                  <h4 class="card-title"></h4>
                  <p class="card-text">{item.des}</p>
                  <p>{item.name}</p>
                  <h3>Rs.<s>{item.del}</s>Rs.{item.price}</h3>
                   {
                        cartProducts.find(items=>items._id === item._id)?(
                          <button className='cartbtn btn-warning' onClick={()=>{deleteCart(item)}}>remove</button>):(
                            <button className='cartbtn btn-warning' onClick={()=>{addCart(item)}}>Add to Cart</button>
                          )
                       }
               </div>
               </div>
                 
             </div>
            ))}
            
          </div>
        </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Smartwatch