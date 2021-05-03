import React from 'react'
import './Product.css'

import StarIcon from '@material-ui/icons/Star';

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
          ))}
        </div>
      </div>
      <img src={image} alt=""/>

      <button>
        Add To Basket
      </button>
    </div>
  )
}

export default Product
