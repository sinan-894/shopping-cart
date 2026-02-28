import { useEffect, useState } from "react";


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
                    <div className="item-container">
                        <img src={imageUrl} alt="" />
                    </div>
                )
            })}
        </div>
    )
}


export default ShopPage