import { Plus,Minus,Trash } from 'lucide-react';
import { Link } from 'react-router';




function CartPage({cartData,updateData}){
    // cartData is a object whith id:{title,imageUrl,price,count}
    const cartDataList = Object.entries(cartData).filter((item)=>item[1].count)


    if(cartDataList.length===0) return <NoItemsPage/>

    const findTotal = ()=>cartDataList.reduce((total,item)=>total+(item[1].price*item[1].count),0)

    const total = findTotal().toFixed(2)
    return(
        <div className="cart-list-container">
            <h1 style={{textAlign:'center'}}>Total : ${total}</h1>
            {cartDataList.map(([id,item])=>(
                <ListItem 
                key={item.title} 
                imageurl={item.imageUrl} 
                title={item.title} 
                price={item.price} 
                count={item.count}
                cartData={cartData}
                updateData={updateData}
                id={id}
                ></ListItem>
            ))}

        </div>
    )
}


export default CartPage


function ListItem({imageurl,title,price,count,cartData,updateData,id}){

    const onAddClick = ()=>{
        updateData({
            ...cartData,
            [id]:{
                ...cartData[id],
                count:cartData[id].count+1
            }

        })
    }

    const onRemoveClick = ()=>{
        updateData({
            ...cartData,
            [id]:{
                ...cartData[id],
                count:cartData[id].count-1
            }

        })
    }

    const onDelete = ()=>{
        updateData({
            ...cartData,
            [id]:{
                ...cartData[id],
                count:0
            }
        })
    }

    return(
        <div className="list-container">
            <img src={imageurl} alt="" />
            <span className="item-title">{title}</span>
            <div className="item-qty-container">
                <button onClick={onRemoveClick}>
                    <Minus size={18}></Minus>
                </button>
                <span className="item-count">{count}</span>
                <button onClick={onAddClick}>
                    <Plus size={18}></Plus>
                </button>
            </div>
            <span className="item-price">${price}</span>
            <button onClick={onDelete}><Trash></Trash></button>
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