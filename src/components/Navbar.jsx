
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router";


function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-pages">
                <Link to='/'><button >Home Page</button></Link>
                <Link to='/shop'><button>Shop Page</button></Link>
            </div>
            <div className="cart-container">
                <Link to='/cart'><button> <ShoppingCart></ShoppingCart> Cart</button></Link>
            </div>
        </div>
    )
}

export default Navbar