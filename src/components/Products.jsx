import React from 'react'
import ProdectsCss from "../assets/styles/Products.module.css"

function Products({image,price,title,id,onClick}) {
  return (
    <div className={ProdectsCss.container}>
        <p className={ProdectsCss.id}>id : {id}</p>
        <div className={ProdectsCss.imgContainer}>
            <img className={ProdectsCss.img} src={image} alt='product'/>
        </div>
        <div className={ProdectsCss.textContainer}>
            <h3>
               {title}
            </h3>
            
            <p>₹ {price}</p>
            <button onClick={onClick} className={ProdectsCss.button}>Checkout</button>
        </div>

    </div>
  )
}

export default Products