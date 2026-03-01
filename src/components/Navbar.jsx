
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router";


function Navbar({activePage}){
    return(
        <div className="navbar">
            <div className="navbar-pages">
                <Link to='/'><button style={{color:(!activePage?'#dfe31d':'#ffffff')}} >Home Page</button></Link>
                <Link to='/shop'><button style={{color:(activePage=='shop'?'#dfe31d':'#ffffff')}}>Shop Page</button></Link>
            </div>
            <div className="cart-container">
                <Link to='/cart'>
                    <button style={{color:(activePage=='cart'?'#dfe31d':'#ffffff')}}> 
                        <ShoppingCart></ShoppingCart>Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar