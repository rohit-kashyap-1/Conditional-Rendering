import React, { useState } from 'react'

export default function Item(props) {
 const [cart, setCart] = useState([])
 const [text, setText] = useState("Add To Cart")
 //useEffect
 
 
   const addToCart = ()=>{
        
        setCart([...cart,props.title])
        setText("Added")

        console.log(cart)
   }

   //cart.length
  return (
    <div>
    {cart.length>0?
        <div><h1>Payment page</h1></div>
    :
    <div style={{backgroundColor:"#4caf50", width:"258px"}}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <button onClick={addToCart} on>{text}</button>
        </div>
    }
    </div>
  )
}
