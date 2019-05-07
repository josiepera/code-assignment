import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import PropTypes from 'prop-types'
import Product from '../components/Product'
import './App.css';

class App extends React.Component{
  state={
    showModal: false
  }

  handleShowMessageClick = () =>
    this.setState({
      showModal: true
    })

  handleCloseModal = () =>
    this.setState({
      showModal: false
    })

  render(){
    const { product, inventory  } = this.props;
      return(
        <div>
          <div className="page-title">
            <h2>Acme Store</h2>
            <div className="shopping-cart">
              <img
                src="https://i.imgur.com/WYXwWfJ.png"
                alt="cart"
                onClick={this.handleShowMessageClick}
              /> 
              {this.state.showModal ? (
                <div className="modal">
                  <CartContainer
                  closeModal={this.handleCloseModal}
                  />
                </div>
              ) : ''}
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
  }).isRequired,
  products: React.PropTypes.array,
}

export default App
