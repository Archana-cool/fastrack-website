import React, { useEffect, useState } from 'react'
import {toast, ToastContainer} from 'react-toastify';
import './Update.css';
import { Link } from 'react-router-dom';


const Update = () => {
    const [productItems,setProductsItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5500/watch')
        .then((res)=>res.json())
        .then((data)=>
        setProductsItems(data))
    },[])

    const DeleteItems=(id)=>{
        fetch(`http://localhost:5500/watchshop/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
           toast.error("deleted successfully");
           setProductsItems((prevProductItems)=>prevProductItems.filter((Item)=>Item._id!=id));
        }

    )}
  return (
    <div>
           <ToastContainer/>
             <table>
                <div className='table1' border="1pxsolid black">
                    <tr>
                        <th>TITLE</th>
                        <th>IMAGE</th>
                        <th>DES</th>
                        <th>PRICE</th>
                        <th>WATCHTYPE</th>
                        
                        <th>ACTIONS</th>
                    </tr>
                    {productItems.map((Item)=>(
                         <tr key={Item._id}>
                            <td>{Item.title}</td>
                            <td><img src={Item.img} alt=''/></td>
                            <td>{Item.price}</td>
                            <td>{Item.des}</td>
                            <td>{Item.quantity}</td>
                            <td>
                                <button  className='table3' placeholder='delete' onClick={()=>DeleteItems(Item._id)}>delete</button>
                                <Link to={`/edit/${Item._id}`}><button>Edit</button></Link>
                            </td>
                         </tr>
                    ))

                    }
                </div>
             </table>
     </div>
       
  )
}

export default Update