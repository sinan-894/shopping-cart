import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"


const cartData = [
  {
    imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:109.95,
    quantity:5,
  },
  {
    imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:67.95,
    quantity:2,
  },
  {
    imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:9.95,
    quantity:1,
  }
]



function App() {

  return (
    <>
      <Navbar></Navbar>
      <CartPage cartData={cartData}></CartPage>
    </>
  )
}

export default App
