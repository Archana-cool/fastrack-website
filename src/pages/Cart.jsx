import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';

const Cart = () => {
    const cartProducts =useSelector((state) => state.cart.cartItems);
    const dispatch =useDispatch();

    const deleteCart=(item) => {
            dispatch(deleteFromCart(item));
        }
        const incrementCart =(id,quantity) =>{
            dispatch(updateQuantity({id,quantity:quantity +1}))
        }
        const decrementCart =(id,quantity) =>{
            if(quantity>1){
                dispatch(updateQuantity({id,quantity:quantity-1}))
            }
        }
    
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="details3">
                            <div class="card-body">
                                <h2 class="cart-title text-white text-center">MY CART</h2>
                            </div>
                            <div class="details">
                                {cartProducts.map((item)=>(
                                    <div class="details1">
                                        <img src={item.img} alt='' />
                                        <div class='cart-body'>
                                            <div class='cart-title'>{item.title}</div>
                                             <div class='cart-text'>{item.text}</div>
                                              <div class='cart-price'>{item.price}</div>
                                              <button onClick={()=>{decrementCart(item._id,item.quantity)}}>-</button>
                                              {item.quantity}
                                              <button onClick={()=>{incrementCart(item._id,item.quantity)}}>+</button>
                                              <div class='cart-des'>{item.des}</div>
                                              </div>
                                              <div class="details2">
                                                <button class="btn btn-danger" onClick={()=>{deleteCart(item)}}>Delete</button>
                                                </div>
                                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart