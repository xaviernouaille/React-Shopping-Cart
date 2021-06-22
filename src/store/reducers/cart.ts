import { useContext } from "react"

export const initialState: IProduct[] = []

// Type
const ADDPRODUCT = "ADDPRODUCT",
  INCREMENTPRODUCT = "INCREMENTPRODUCT",
  DECREMENTPRODUCT = "DECREMENTPRODUCT",
  DELETECART = "DELETECART"

// // Payload
export interface IProduct {
  id: string
  name: string
  description: string
  qty: number
  price: number
  img: string
}

interface IADDPRODUCT {
  type: typeof ADDPRODUCT
  payload: IProduct
}

interface IINCREMENTPRODUCT {
  type: typeof INCREMENTPRODUCT
  payload: IProduct
}

interface IDECREMENTPRODUCT {
  type: typeof DECREMENTPRODUCT
  payload: IProduct
}

interface IDELETECART {
  type: typeof DELETECART
}
type CARTACTION =
  | IADDPRODUCT
  | IINCREMENTPRODUCT
  | IDECREMENTPRODUCT
  | IDELETECART

export const cartReducer = (state: IProduct[], action: CARTACTION) => {
  switch (action.type) {
    case "ADDPRODUCT":
      const existingCartItem = state.find(x => x.id === action.payload.id)
      if(existingCartItem != undefined){
        return state.map(product => product.id === action.payload.id ? {...action.payload, qty: product.qty+1} : product)
      }
      return [...state, action.payload]
    case "INCREMENTPRODUCT":
      const existingCartItem2 = state.find(x => x.id === action.payload.id)
      if(existingCartItem2 != undefined){
        return state.map(product => product.id === action.payload.id ? {...action.payload, qty: product.qty+1} : product)
      }
      return [...state, action.payload]
    case "DECREMENTPRODUCT":
      const existingCartItem3 = state.find(x => x.id === action.payload.id)
      if(existingCartItem3 && existingCartItem3.qty === 1){
        return state.filter(product => product.id !== action.payload.id)
      }
      return state.map(product => (product.qty != 1) && product.id === action.payload.id ? {...action.payload, qty: product.qty - 1} : product)
    case "DELETECART":
      return initialState
    default:
      return initialState
  }
}

export default cartReducer
