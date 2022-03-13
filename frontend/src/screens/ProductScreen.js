import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1507832321772-e86cc0452e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product</p>
          <p className="left__price">Price: $49</p>
          <p className="left__description">
            Descriptin: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio cupiditate ratione eligendi, nostrum animi impedit.
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price:
            <span>$49</span>
          </p>
          <p>
            Status:
            <span>In Stock : 100</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
