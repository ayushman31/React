import React from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntMenu from '../utils/useRestrauntMenu';

const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestrauntMenu(resId);
    
    //console.log(resId);
    

    if (resInfo === null) return <Shimmer />

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    
    return  (

        




        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>Menu:</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs. {item.card.info.price/100 }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;