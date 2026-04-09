import React, { useEffect, useState } from 'react'
import './Watches.css'
import { CiLocationOn } from "react-icons/ci";
import Watch from '../product/Watch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Watches = () => {
  const cartProducts =useSelector((state)=>state.cart.cartItems)
  const dispatch =useDispatch();
  const addCart =(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
   const[Watch,setwatch]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5500/watch`)
      .then((res)=>res.json())
      .then((data)=>{
        if(Array.isArray(data)){
          setwatch(data)
        }
      }).catch((err)=>
      console.log(err));
    });
  return (
    <>
      <Navbar/>
      <div class="">
        <div class="loc"><CiLocationOn class="wl"/>
        Select a location to check product availability Add Location</div>   
      <div class="container-fluid">
        <h5>Home/Watches</h5>
        <hr/>
        <h2><center>1,202 items found for " Watches "</center></h2>
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
        <div class="col-10 c shadow">
          <div>
            <strong>YOU COULD BE INTERESTED IN</strong>
          </div><br/>
           <div class="row m-2 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
            {Watch.map((item)=>(
                         <div class="col">
                <div class="card shadow cad" key={item._id}>
                <img src={item.img} class="card-img-top cad-im"/>
                  <div class="card-body">
                  <h4 class="card-title"></h4>
                  <p class="card-text">{item.des}</p>
                  <p>{item.name}</p>
                  <h3>Rs.{item.price}</h3>
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

export default Watches