import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"
import ErrorPage from "./components/Error"
import Loading from "./components/Loading"
import { useParams } from "react-router"





function App() {

  const {page} = useParams()
  return (
    <>
      <Navbar></Navbar>
      {
      (!page)?<HomePage/>:
      (page=='shop')?<ShopPage/>:
      (page=='cart')?<CartPage cartData={[]}/>:
      null
      }
    </>
  )
}

export default App
