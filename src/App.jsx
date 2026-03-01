import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"
import ErrorPage from "./components/Error"
import Loading from "./components/Loading"





function App() {

  return (
    <>
      <Navbar></Navbar>
      <Loading></Loading>
    </>
  )
}

export default App
