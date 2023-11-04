import React from "react";
import { useFilter } from "../../Context";
import "./Card.css";
import { AiFillMinusCircle, AiFillPlayCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { FaRupeeSign } from "react-icons/fa";

export const ProductCardForCart = () => {
  const { state, dispatch } = useFilter();
  const { cartlist } = state;
  
  return(
    {cartlist && cartlist.map((item)=>{
        <div className="horizontal-card" key={item.cartItem.id}>
        <div className="horizontal-card-image">
        <img src={item.cartItem.img} alt=""  className="product-card-img"/></div>

        <div className="horizontal-card-sectionTwo flex-col">
        <div className="horizontal-card-content">
        <h3 className="vertical-card-content-one margin-top-bottom-zero">
        {item.cartItem.productBrand}</h3>
        <h4 className="vertical-card-content-two margin-top-bottom-zero">
        {item.cartItem.productBrand}</h4>
        
        </div></div>
        </div>
    })}
  )
};
