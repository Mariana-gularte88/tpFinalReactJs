import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './components/Context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
  <>
  <BrowserRouter>
    <CartProvider>
      <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Encontra todo a un click'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<checkout/>}/>
            < Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={ <h1>404 NOT FOUND</h1> }/>
          </Routes>
    </CartProvider>
  </BrowserRouter>
  </>
)
}
export default App


