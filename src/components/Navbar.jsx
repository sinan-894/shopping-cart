
import { ShoppingCart,Menu } from 'lucide-react';
import { useState,useEffect } from 'react';
import { Link } from "react-router";


function Navbar({activePage}){
    const [width,setWidth] = useState(window.innerWidth)
    console.log(width)
    useEffect(()=>{
        const onResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    return(
        <div className="navbar">
            {(width<750)?(
                <DropDown></DropDown>
            ):(
                <DisplayPageOption activePage={activePage}></DisplayPageOption>
            )}
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


function DisplayPageOption({activePage}){
    return(
        <div className="navbar-pages">
            <Link to='/'><button style={{color:(!activePage?'#dfe31d':'#ffffff')}} >Home Page</button></Link>
            <Link to='/shop'><button style={{color:(activePage=='shop'?'#dfe31d':'#ffffff')}}>Shop Page</button></Link>
        </div>
    )
}

function DropDown(){

    const [drop,setDrop] = useState(false)
    return(
        <div className='drop-down-container'>
            <button 
            onClick={()=>setDrop(!drop)}
            style={{color:(drop)?'#dfe31d':'#ffffff'}}
            ><Menu></Menu></button>
            <div className='drop-down' style={{display:(drop)?'block':'none'}}>
                <Link to='/'><button onClick={()=>setDrop(false)} >Home Page</button></Link>
                <Link to='/shop'><button onClick={()=>setDrop(false)}>Shop Page</button></Link>
            </div>
        </div>
    )
    
}