import { useEffect, useState } from 'react';
import products from './products/products.json'
import { useDispatch } from 'react-redux';
import { removeUser } from '../Store/userslice';

const Dashboard = ({username}) => {
const dispatch=useDispatch()
  
  return (
     <div className="App">
  
   
      <div className="header">
      <div class='left-section'>
      <img className='hamburger-menu'  src={process.env.PUBLIC_URL + '/hamburger-menu.svg'} alt="Logo" />
      <img  className='logo' src={process.env.PUBLIC_URL + '/ecommerce.png'} alt="Logo" />
      
      </div>
        <div class='middle-section'>
      <input type="text" placeholder="Search Products"  className="search-bar" />
      </div>
      <div class='right-section'>
      <img className='profilepic'  src={process.env.PUBLIC_URL + '/profilepic.png'} alt="Profile Pic" />
      <button className="submit-button" onClick={() => dispatch(removeUser())}>Logout {username}</button>
      </div>
      </div>
      <div className="product-grid">
        {products.map((x) => (
          <div className="product">
            <div className="product-thumbnail">
              <img className="thumbnail" src={x.thumbnail} alt={x.title} />
            </div>
            <div className="product-info-grid">
              <p className="productTitle">{x.title}</p>
              <p className="productPrice"> &#36;{x.price} USD</p>
              <p className="productDesc">{x.description}</p>
            </div>
           
          </div>
        ))}
      </div>
      </div>
  );
}

export default Dashboard;
