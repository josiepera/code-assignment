import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { addToCart } from '../actions'


class Cart extends React.Component{


  render(){
    const { products, total, onCheckoutClicked, closeModal, inventory, onAddToCartClicked, image, title  } = this.props;

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product =>
      <div className="nodes">
        <div>
          <img src={product.image} alt={title}/>
          <Product
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
          />
        </div>
        <h6>Remove</h6>
        { product.inventory > 0 ?(
        <div className="buttons">
          <button
            className="subtract-button"
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}
            >
            -
          </button> <p>{product.inventory}</p>
          <button
            className="add-button"
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}
            >
            +
          </button>
        </div>
      )
         : ''}
      </div>
    )

  ) : (
      <div className="empty-cart">
        <img src="https://i.imgur.com/WYXwWfJ.png" alt="cart"/>
        <em>Please add some products to cart.</em>
      </div>


    )

    return (
    <div>
      <div id="openCart" className ="cart">
        <div>
          <a onClick={closeModal}>X</a>
          <h3>Your Cart</h3>
          <hr/>

          <div>{nodes}</div>

          <p id="total">Total: &#36;{total}</p>

          <button
            className="products-cart"
            onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>

      </div>
    </div>
    )
  }
}

Cart.propTypes = {
  products: React.PropTypes.array,
  total: React.PropTypes.string,
  onCheckoutClicked: React.PropTypes.func,
  onAddToCartClicked: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

export default Cart
