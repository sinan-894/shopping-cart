import { Plus,Minus,Trash } from 'lucide-react';
import { Link } from 'react-router';




function CartPage({cartData}){
    // cartData is a object whith id:{title,imageUrl,price,count}
    const cartDataList = Object.values(cartData)
    console.log(cartData)
    console.log(cartDataList)

    if(cartDataList.length===0) return <NoItemsPage/>

    const findTotal = ()=>cartDataList.reduce((total,item)=>total+(item.price*item.count),0)

    const total = findTotal().toFixed(2)
    return(
        <div className="cart-list-container">
            <h1 style={{textAlign:'center'}}>Total : ${total}</h1>
            {cartDataList.map((item)=>(
                <ListItem key={item.title} imageurl={item.imageUrl} title={item.title} price={item.price} count={item.count}></ListItem>
            ))}

        </div>
    )
}


export default CartPage


function ListItem({imageurl,title,price,count}){
    console.log(imageurl,title,price,count)
    return(
        <div className="list-container">
            <img src={imageurl} alt="" />
            <span className="item-title">{title}</span>
            <div className="item-qty-container">
                <button >
                    <Plus size={18}></Plus>
                </button>
                <span className="item-count">{count}</span>
                <button >
                    <Minus size={18}></Minus>
                </button>
            </div>
            <span className="item-price">${price}</span>
            <button><Trash></Trash></button>
        </div>
    )
}


function NoItemsPage(){
    return(
        <div className='page-container'>
            <h1>No Items in The Cart</h1>
            <Link to='/shop'><button>Shop Page</button></Link>
        </div>
    )
}