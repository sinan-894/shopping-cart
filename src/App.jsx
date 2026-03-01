import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"
import { useParams } from "react-router"
import NotFoundPage from './components/NotFoundPage'





function App() {

  const {page} = useParams()
  return (
    <>
      <Navbar></Navbar>
      {
      (!page)?<HomePage/>:
      (page=='shop')?<ShopPage/>:
      (page=='cart')?<CartPage cartData={[]}/>:
      <NotFoundPage/>
      }
    </>
  )
}

export default App
