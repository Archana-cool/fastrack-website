import React from 'react'
import './Upload.css';

import { toast, ToastContainer } from 'react-toastify';

const Upload = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title= form.title.value;
        const img =form.img.value;
        const price=form.price.value;
       const des=form.des.value;
        const quantity=1;

        if(title==="" ||img==="" || price==="" || des==="" || quantity==="")
           {
            toast.warn("fill the required fields")
           }
           const watchObj ={title,img,price,des,quantity};
           console.log(watchObj);
           fetch("http://localhost:5500/wat",{
              method:"POST",
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(watchObj)
           }).then((res)=>res.json())
           .then((data)=>{
            toast.success("data added successfully");
            form.reset();
            window.location.href="/update";
           })

           
        }
  return (
    <>
             <ToastContainer/>
              <div class="f">
                <form onSubmit={handleSubmit}>
                    <h2>UPLOAD</h2>
                    <div class="upload0">
                        <label value="title"><b>TITLE</b></label>
                        <input type="text" name="title" class="input ms-3"/> 
                    </div>
                    <div class="upload1">
                        <label value="img"><b>IMAGE</b></label>
                        <input type="img" name="img" class="input ms-3"/> 
                    </div>
                     <div class="upload2">
                        <label value="food"><b>OFFER</b></label>
                        <input type="text" name="food" class="input ms-3"/> 
                    </div>
                     <div class="upload3">
                        <label value="des"><b>DES</b></label>
                        <input type="text" name="des" class="input ms-3"/> 
                    </div>
                     <div class="upload4">
                        <label value="price"><b>PRICE</b></label>
                        <input type="numbers" name="price" class="input ms-3"/> 
                    </div>
                     <div class="upload7">
                        <button type="submit" class="btn">upload</button>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Upload
