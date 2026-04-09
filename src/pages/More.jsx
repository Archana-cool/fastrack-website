import React from 'react'
import './More.css';
import ma from '../images/ma.webp';
import mb from '../images/mb.jpg';
import mc from '../images/mc.webp';
import md from '../images/md.jpg';
import me from '../images/me.jpg';
import mf from '../images/mf.webp';
import mia from '../images/mia.jpg';
import mib from '../images/mib.webp';
import mic from '../images/mic.webp';
import mid from '../images/mid.webp';

import { CiLocationOn } from "react-icons/ci";
import Mr from '../product/Mr';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const More = () => {
   const cartProducts =useSelector((state)=>state.cart.cartItems)
  const dispatch =useDispatch();
  const addCart =(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <>
    <Navbar/>
    
      <div>
                <div class="loc"><CiLocationOn class="wl"/>
                Select a location to check product availability Add Location</div>   
              <div class="container-fluid">
                <h5>Home/More...</h5>
              </div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={ma} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={mb} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={mc} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={md} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={me} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={mf} class="d-block w-100"/>
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
   <div> 

   </div>
   <div class="row m-2 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
         <div class="col">
            <div class="card">
             <img src={mia} class="card-img-top cd"/>
             <div class="card-body">
             <p class="card-text">Steel Watches</p>
            </div>
           </div>
         </div>
          <div class="col">
            <div class="card">
             <img src={mib} class="card-img-top cd"/>
              <div class="card-body">
                <p class="card-text">Steel strap Watches</p>
              </div>
             </div>
         </div>
          <div class="col">
              <div class="card">
             <img src={mic} class="card-img-top cd"/>
              <div class="card-body">
                <p class="card-text">Bags</p>
              </div>
             </div>
         </div>
          <div class="col">
              <div class="card">
             <img src={mid} class="card-img-top cd"/>
              <div class="card-body">
                <p class="card-text">Fastrack cent</p>
              </div>
             </div>
         </div>
   </div>
         <div class="row m-2 row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
          {Mr.map((item)=>(
                  <div class="col">
                 <div class="card" key={item.id}>
                    <img src={item.img} class="card-img-top"/>
                 <div class="card-body">
                      <h5 class="card-title">Rs.{item.price}</h5>
                       <p class="card-text">{item.des}</p>
                       {
                        cartProducts.find(items=>items.id === item.id)?(
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
      <Footer/>
    </>
  )
}

export default More