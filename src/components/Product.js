import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product-container">
    <div className="card-title">
      <h4>
        {title}
      </h4>
      <div className="price">
       &#36;{price}
      </div>
    </div>
    <div className="amount">
     {inventory ? `${inventory} ` : null} Remaining
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
