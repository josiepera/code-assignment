import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ image, title, product, onAddToCartClicked }) => (
  <div className="container"style={{ marginBottom: 20 }}>
    <img src={product.image} alt={title}/>
    <div className="product-container">
      <Product
        image={product.image}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
         />
      <button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}
        style={product.inventory > 0 ? {opacity:'1'} : {opacity:'.5'}}
        >
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    image:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
