import React, { Component } from 'react';
//import './Product.css';
function Product(props) {
 
    return <div>
             <div className='product_img' style={{ backgroundImage: `url(${img})` }}></div>
             <div className='product_box'>
                 <p className='product_title'>{name}</p>
                 <p className='product_price'>${price}</p>
             </div>
           </div>;
  }

  export default Product;

