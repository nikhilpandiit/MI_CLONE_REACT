import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='hotAccessoriesMenu'>
    <Link className='hotAccessoriesLink' to="/music">Music Store</Link>
    <Link className='hotAccessoriesLink' to="/smartDivice">Smart Divice</Link>
    <Link className='hotAccessoriesLink' to="/home">Home</Link>
    <Link className='hotAccessoriesLink' to="/LifeStyles">LifeStyle</Link>
    <Link className='hotAccessoriesLink' to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu;
