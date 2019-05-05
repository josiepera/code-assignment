import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'


class Cart extends React.Component{
  render(){
    const { products, total, onCheckoutClicked  } = this.props;

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
      )
    ) : (
      <em>Please add some products to cart.</em>
    )

    return (
      <div id="openCart" className ="cart">
        <div>
          <a href="close" title="Close" className="close">X</a>
          <h3>Your Cart</h3>
          <hr/>

          <div>{nodes}</div>
          <p>Total: &#36;{total}</p>
          <button onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  products: React.PropTypes.array,
  total: React.PropTypes.string,
  onCheckoutClicked: React.PropTypes.func
}

export default Cart
