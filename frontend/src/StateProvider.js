import React, { createContext, useContext, useReducer } from 'react'

// Creates the data layer
export const StateContext = createContext()

// StateProvider is wrapped around App
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

// Get information from data layer
export const useStateValue = () => useContext(StateContext)