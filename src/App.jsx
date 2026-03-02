import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"
import { useParams } from "react-router"
import NotFoundPage from './components/NotFoundPage'
import { useState } from "react"





function App() {

  const {page} = useParams()
  const [cartData,setCartData] = useState({})

  return (
    <>
      <Navbar activePage={page}></Navbar>
      {
      (!page)?(
        <HomePage/>
      ) : (page=='shop')?(
        <ShopPage cartData={cartData} updateData={setCartData}/>
      ):(page=='cart')?(
        <CartPage cartData={cartData}/>
      ):(
        <NotFoundPage/>
      )}
    </>
  )
}


export default App
