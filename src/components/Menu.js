import React from 'react'
import {menu} from "../Data";
const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>
        our <span>menu</span>
      </h1>
      <div className='box-container'>
       {
        menu.map((item, index)=>(
         <div className='box'>
            <img src={item.img} alt=''/>
            <h3>tasty and healthy</h3>
            <div className='price'>
            Rs. 350 <span> 450</span>
            </div>
            <a href='#' className='btn'>Add to Cart</a>
         </div>   
        ))
       }
      </div>
    </section>
  )
}

export default Menu
