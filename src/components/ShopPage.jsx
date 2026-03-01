import { useEffect, useState } from "react";
import { Star } from 'lucide-react';
import { ShoppingCart,Plus,Minus } from 'lucide-react';

function ShopPage(){
    const [dataJson,setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const dataArray = Array.from(data)
            console.log(dataArray)
            setData(dataArray)
        });
    },[])


    return(
        <div className="shop-container">
            {dataJson.map((items)=>{
                const imageUrl = items.image
                return (
                    <Item title={items.title} price={items.price} rating={items.rating.rate}  imageUrl={imageUrl} key={items.id}></Item>
                )
            })}
        </div>
    )
}


export default ShopPage


function Item({title,imageUrl,price,rating}){
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
                    {/* <button><ShoppingCart></ShoppingCart></button> */}
                    <NumberSelector size={18}></NumberSelector>
                    
                </div>
                <p className="price-tag">${price}</p>
                <p className="product-title">{title}</p>
            </div>
            
        </div>
    )
}


function NumberSelector({size}){
    return(
        <div className="number-selector" >
            <button><Minus size={size}></Minus></button>
            <span className="item-quantity">0</span>
            <button ><Plus size={size}></Plus></button>
        </div>
    )
}