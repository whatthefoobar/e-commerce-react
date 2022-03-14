import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://images.unsplash.com/photo-1507832321772-e86cc0452e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="product name"
        />
      </div>
      <Link to={`/product/${1111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>

      <p className="cartitem__price">$49</p>
      <select className="cartitem__select" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__deletBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
