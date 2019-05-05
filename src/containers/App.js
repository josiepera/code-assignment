import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import PropTypes from 'prop-types'
import Product from '../components/Product'
import './App.css';

class App extends React.Component{

  state={
    show:false
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render(){

      return (
        <div>
          <div className="page-title">
            <h2>Acme Store</h2>
            <div className="shopping-cart">
              <a href="#openCart"><img src="https://i.imgur.com/WYXwWfJ.png" alt="cart"/></a>
              <CartContainer/>
            </div>
          </div>

          <hr/>
          <ProductsContainer />
          <hr/>
        </div>
    )
  }
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
