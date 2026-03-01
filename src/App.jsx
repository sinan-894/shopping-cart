import Navbar from "./components/Navbar"
import "./App.css"
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"
import CartPage from "./components/CartPage"
import ErrorPage from "./components/Error"





function App() {

  return (
    <>
      <Navbar></Navbar>
      <ErrorPage></ErrorPage>
    </>
  )
}

export default App
