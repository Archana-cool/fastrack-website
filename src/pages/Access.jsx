import React, { useEffect, useState } from 'react'
import './Access.css'
import { CiLocationOn } from "react-icons/ci";
import aa from '../images/aa.webp';
import ab from '../images/ab.jpg';
import ac from '../images/ac.webp';
import Acc from '../product/Acc';
import {useDispatch,useSelector} from 'react-redux';
import {addToCart,deleteFromCart} from '../store/cartslice/Cartslice.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Access = () => {
  const cartProducts =useSelector((state)=>state.cart.cartItems)
  const dispatch =useDispatch();
  const addCart =(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  // const[chickenwings,setchickenwings]=useState([])
  // useEffect(()=>{
  //   fetch("https://localhost:3030/foods")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     if(ArrayisArray(data)){
  //       setchickenwings(data)
  //     }
  //   }).catch((err)=>console.log(err));
  // });
  
  return (
    <>
    <Navbar/>
      <div>
         <div class="loc"><CiLocationOn class="wl"/>
                Select a location to check product availability Add Location</div>   
              <div class="container-fluid">
                <h5>Home/Accessories</h5>
                <hr/>
                <h2><center>149 items found for " Accessories "</center></h2>
                <hr/>
              </div>
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={aa} class="d-block w-100 h-25"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={ab} class="d-block w-100 h-25"/>
    </div>
    <div class="carousel-item">
      <img src={ac} class="d-block w-100 h-25"/>
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
              <div class="row m-3 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
               {Acc.map((item)=>(
                      <div class="col">
                       <div class="card" key={item.id}>
                      <img src={item.img} class="card-img-top"/>
                      <div class="card-body">
                      <h4 class="card-title">Rs.{item.price}</h4>
                     <p class="card-text">{item.des}</p>
                     {
                      cartProducts.find(items => items.id===item.id)?(
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

export default Access