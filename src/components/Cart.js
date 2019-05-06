import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'


class Cart extends React.Component{


  render(){
    const { products, total, onCheckoutClicked, closeModal, inventory, onAddToCartClicked, image, title  } = this.props;

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product =>
      <div className="nodes">
        <img src={product.image} alt={title}/>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          inventory={product.inventory}
        />
        <button
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}
          >
          Add
          {product.inventory > 0 ? 'Add' : 'Sold Out'}
        </button>
    
      </div>
    )

  ) : (
      <div>
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

          <p>Total: &#36;{total}</p>

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
