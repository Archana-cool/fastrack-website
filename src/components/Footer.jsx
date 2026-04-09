import React from 'react'
import './Footer.css'
import logob from '../images/logob.jpg' 
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div class="foot">
           <div>
             <img src={logob} class="fim"/>
             <br/><br/>
             <FaFacebookF class="ic"/>
             <AiFillInstagram class="ic"/>
             <FaYoutube class="ic"/>
           </div>
           <div class="fts">
            <h3>CUSTOMER SERVICE</h3>
            <br></br>
            <h5>Payment Options</h5>
            <h5>Track Order</h5>
            <h5>Find a Store</h5>
            <h5>Encircle Program</h5>
            <h5>E Warranty Registration</h5>
           
            <h5>1800-266-0123</h5>
            <h5>custamercare@titan.co.in</h5>
            <h5>FAQs</h5>

           </div>
           <div class="ftt">
                <h3>POLICIES</h3>
            <br></br>
            <h5>Brand Protection</h5>
            <h5>Cancellation</h5>
            <h5>Shipping</h5>
            <h5>Warranty Policies</h5>
           </div>
           <div class="ftf">
              <h3>ABOUT FASTRACK</h3>
            <br></br>
            <h5>About Us</h5>
            <h5>Help & Contact</h5>
            <h5>Careers</h5>
            <h3>DOWNLOAD THE TITAN APP</h3>
           </div>
      </div>

    </>
  )
}

export default Footer