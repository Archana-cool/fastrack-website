import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './Edit.css';
const Edit = () => { 
   const{id}=useParams();
   const[productData,setproductData]=useState({
      name:"",
      des:"",
      title:"",
      img:"",
      price:"",
      quantity:"",

});
useEffect(()=>{
   fetch(`http://localhost:5500/watchpage/${id}`)
   .then((res)=>res.json())
   .then((data)=>setproductData(data));
});
const handleUpdate=(event)=>{
   event.preventDefault();
   const form=event.target;
   const img=form.img.value;
   const des=form.des.value;
   const price=form.price.value;
   const title=form.title.value;

   const productObj={img,des,price,title};
   console.log(productObj);
   fetch(`http://localhost:5500/allproducts/${id}`,{
      method:"PATCH",
      headers:{
         "Content-type":"application/json",
      },
      body:JSON.stringify(productObj),
   })
   .then((res)=>res.json())
   .then((data)=>{
      toast.success("Product updated successfully");
      window.location.href='/update';
   });
}

  return (
    
        <>
           <ToastContainer/>
           <form onSubmit={handleUpdate}>
            <label value="title">TITLE</label>
            <input type="text" name="title" defaultValue={productData.title}></input>
             <label value="img">IMAGE</label>
            <input type="img" name="img" defaultValue={productData.img}></input>
             <label value="des">DES</label>
             <input type="text" name="des" defaultValue={productData.des}></input>
             <label value="offer">OFFER</label>
            <input type="text" name="offer" defaultValue={productData.offer}></input>
             <label value="price">PRICE</label>
            <input type="numbers" name="price" defaultValue={productData.price}></input>
            <button>submit</button>
           </form>
        
        </>
  )
}

export default Edit
