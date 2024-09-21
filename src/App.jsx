import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import CartPage from './Pages/Cart/CartPage.jsx'
import Products from './Pages/Products/Products.jsx'
import CartContext from './Context/CartContext.jsx'
import { useState } from 'react'


function App() {

  const [cartItemData, setCartItemData] = useState([])
  const openCart = (cartData) => {
    console.log(cartData)
    const tempData = [...cartItemData, ...cartData]
    setCartItemData(tempData)
  }

  const removeFromCart = (id) => {
    console.log(id)
    const filteredCartData = cartItemData.filter(element => element.id !== id);
    setCartItemData(filteredCartData)
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route
              path='/'
              element={<Products openCart={openCart} />}
            />
            <Route
              path='/cart'
              // element={<CartPage />}
              element={
                <CartContext.Provider value={{ cartItemData, removeFromCart }}>
                  <CartPage />
                </CartContext.Provider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
