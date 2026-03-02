import { useEffect, useState } from "react";
import { Star } from 'lucide-react';
import { ShoppingCart,Plus,Minus } from 'lucide-react';
import Loading from "./Loading";
import ErrorPage from "./Error";

function ShopPage({cartData,updateData}){
    const [dataJson,setData] = useState([])
    const [error,setError]  = useState(false)
    const [loading,setLoading]  = useState(true)
    useEffect(()=>{
        const fetchData = async  ()=>{
            try{
                const response =  await fetch('https://fakestoreapi.com/products');
                const data  = await response.json()
                const dataArray = Array.from(data)
                setData(dataArray)
            }
            catch{
                setError(true)
            }
            finally{
                setLoading(false)
            }
            
        }
        fetchData()
    },[])

    if(loading) return <Loading/>
    if(error) return <ErrorPage/>


    return(
        <div className="shop-container">
            {dataJson.map((items)=>{
                const imageUrl = items.image
                return (
                    <Item 
                    title={items.title} 
                    price={items.price} 
                    rating={items.rating.rate}  
                    imageUrl={imageUrl}
                    id={items.id} 
                    key={items.id}
                    cartData ={cartData}
                    updateData = {updateData}
                    >
                    </Item>
                )
            })}
        </div>
    )
}


export default ShopPage


function Item({title,imageUrl,price,rating,id,cartData,updateData}){
    let displayCartLogo = true
    if(cartData[id] && cartData[id].count) displayCartLogo = false

    const onCartClick = ()=>{
        updateData({
            ...cartData,
            [id]:{
                title,
                imageUrl,
                price,
                count:1
            }
        })

    }



    return(
        <div className="item-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="discription-container">
                <div className="rate-cart">
                    <div className="rating-container">
                        <Star size={12} fill="#e0e52a" color="#e0e52a"></Star><span>{rating}</span>
                    </div>
                    {
                        (displayCartLogo)?(
                        <button onClick={onCartClick}><ShoppingCart></ShoppingCart></button>
                        ):(
                        <NumberSelector 
                        size={18} 
                        count={cartData[id].count}
                        cartData={cartData}
                        updateData={updateData}
                        id={id}
                        ></NumberSelector>
                        )
                    }
                    
                    
                </div>
                <p className="price-tag">${price}</p>
                <p className="product-title">{title}</p>
            </div>
            
        </div>
    )
}


function NumberSelector({size,count,cartData,updateData,id}){

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


    return(
        <div className="number-selector" >
            <button onClick={onRemoveClick}><Minus size={size}></Minus></button>
            <span className="item-quantity">{count}</span>
            <button onClick={onAddClick} ><Plus size={size}></Plus></button>
        </div>
    )
}