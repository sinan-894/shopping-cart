
import { ShoppingCart } from 'lucide-react';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-pages">
                <button>HomePage</button>
                <button>ShopPage</button>
            </div>
            <div className="cart-container">
                <button> <ShoppingCart></ShoppingCart> Cart</button>
            </div>
        </div>
    )
}

export default Navbar