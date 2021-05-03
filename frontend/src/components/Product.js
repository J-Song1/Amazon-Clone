import React from 'react'
import './Product.css'

import StarIcon from '@material-ui/icons/Star';

import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })


    // Dispatch into provider
  }

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

      <button onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  )
}

export default Product
