import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import PropTypes from 'prop-types'
import Product from '../components/Product'
import './App.css';

const App = () => {


  return (
  <div>
    <div className="page-title">
      <h2>Acme Store</h2>
      <div className="shopping-cart">
        <img src="https://i.imgur.com/WYXwWfJ.png" alt="cart"/>

      </div>
    </div>

    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer/>
  </div>
)
}



App.propTypes = {
  product: PropTypes.shape({
    image:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

export default App
