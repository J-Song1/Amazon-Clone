export const initialState = {
  basket: []
}

// Selectors - good practice
export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => item.price + total, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(item => item.id === action.id)

      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      }
      else {
        console.warn(`No product with ID: ${action.id}`)
      }

      return {
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
}

export default reducer;