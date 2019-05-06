import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ image, price, inventory, title }) => (
  <div className="product">


    <div>
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

  </div>
)

Product.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
