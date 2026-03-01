import { Plus,Minus,Trash } from 'lucide-react';



function CartPage({cartData}){
    // cartData is a array of object of data {title,imageUrl,price,quantity}

    const findTotal = ()=>578347

    const total = findTotal()
    return(
        <div className="cart-list-container">
            <h1 style={{textAlign:'center'}}>Total : $5435345</h1>
            {cartData.map((item)=>(
                <ListItem></ListItem>
            ))}

        </div>
    )
}


export default CartPage


function ListItem(){
    return(
        <div className="list-container">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
            <span className="item-title">title</span>
            <div className="item-qty-container">
                <button >
                    <Plus size={18}></Plus>
                </button>
                <span className="item-quantity">4</span>
                <button >
                    <Minus size={18}></Minus>
                </button>
            </div>
            <span className="item-price">$898080</span>
            <button><Trash></Trash></button>
        </div>
    )
}