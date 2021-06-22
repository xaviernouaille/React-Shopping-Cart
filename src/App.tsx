import React, { createContext, Fragment, useReducer } from "react"
import "./App.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"
import RouteWrapper from "./routes/index"
import { Provider } from "react-redux"
import store from "./store"
import cartReducer, { initialState, IProduct } from "./store/reducers/cart"

export const AppContext = createContext<{ state: IProduct[]; dispatch: any }>({
  state: initialState,
  dispatch: () => null,
})

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* <Provider store={store}> */}
      <Fragment>
        <Router>
          <Nav />
          <RouteWrapper />
          <Footer />
        </Router>
      </Fragment>
      {/* </Provider> */}
    </AppContext.Provider>
  )
}

export default App
