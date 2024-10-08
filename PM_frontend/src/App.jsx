import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import AddProduct from './Components/AddProduct'
import Home from './Components/Home'
import EditProduct from './Components/EditProduct'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/editProduct/:id" element={<EditProduct />}></Route>
      </Routes>
    </>
  )
}

export default App