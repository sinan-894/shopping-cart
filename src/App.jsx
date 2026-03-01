import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"



function App() {

  return (
    <>
      <Navbar></Navbar>
      <CartPage cartData={[1,2,2,3,4,4]}></CartPage>
    </>
  )
}

export default App
