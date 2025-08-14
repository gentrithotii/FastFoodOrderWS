import React from "react";

const FoodItem = ({ title, image, descripton, price }) => {
  return (
    <div className="card my-2 mx-2 h-100">
      <img src={`${image}`} className="card-img-top" alt={`${descripton}`} />
      <div className="card-body text-start">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descripton}</p>
        <p className="card-text">Price: {price} kr</p>
        <button type="button" className="btn btn-primary">
          Order
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
