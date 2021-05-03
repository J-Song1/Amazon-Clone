import React from 'react'
import CurrencyFormat from 'react-currency-format'

import './Subtotal.css'

import { useStateValue } from '../StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue() 

  const getTotal = (basket) => {
    return basket.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
