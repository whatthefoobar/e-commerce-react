import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://images.unsplash.com/photo-1507832321772-e86cc0452e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="product name"
      />
      <div className="product__info">
        <p className="info__name">Product</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel
          corporis eaque totam libero exercitationem repellat officiis quidem
        </p>
        <p className="info__price">$49.00</p>
        <Link to={`/product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
