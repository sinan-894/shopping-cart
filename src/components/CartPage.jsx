import { Plus,Minus,Trash } from 'lucide-react';



function CartPage({cartData}){
    // cartData is a array of object of data {title,imageUrl,price,quantity}

    const findTotal = ()=>cartData.reduce((total,item)=>total+(item.price*item.quantity),0)

    const total = findTotal().toFixed(2)
    return(
        <div className="cart-list-container">
            <h1 style={{textAlign:'center'}}>Total : ${total}</h1>
            {cartData.map((item)=>(
                <ListItem imageurl={item.imageurl} title={item.title} price={item.price} quantity={item.quantity}></ListItem>
            ))}

        </div>
    )
}


export default CartPage


function ListItem({imageurl,title,price,quantity}){
    return(
        <div className="list-container">
            <img src={imageurl} alt="" />
            <span className="item-title">{title}</span>
            <div className="item-qty-container">
                <button >
                    <Plus size={18}></Plus>
                </button>
                <span className="item-quantity">{quantity}</span>
                <button >
                    <Minus size={18}></Minus>
                </button>
            </div>
            <span className="item-price">${price}</span>
            <button><Trash></Trash></button>
        </div>
    )
}