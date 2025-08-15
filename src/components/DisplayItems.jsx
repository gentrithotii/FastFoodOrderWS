import { useState } from "react";
import FoodItem from "./FoodItem";
import foodOrderData from "../exampledata/foodOrderData.json";
import OrderDetails from "./OrderDetails";

const DisplayItems = () => {
  const [orderItems, setOrderItems] = useState([]);

  const handleAddItem = (item) => {
    const foundOrder = orderItems.find((o) => o.orderTitle === item.orderTitle);
    if (foundOrder) {
      const updatedOrders = orderItems.map((o) =>
        o.orderTitle === item.orderTitle
          ? {
              ...o,
              orderQuantity: o.orderQuantity + 1,
              totalOrderPrice: (o.orderQuantity + 1) * o.orderPrice,
            }
          : o
      );
      setOrderItems(updatedOrders);
    } else {
      setOrderItems([...orderItems, item]);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Fast Food Menu</h1>

      <div className="row g-4">
        {foodOrderData.map((i, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <FoodItem
              image={i.image}
              title={i.title}
              description={i.description}
              price={i.price}
              handleAddItem={handleAddItem}
            />
          </div>
        ))}
      </div>

      <OrderDetails orderList={orderItems} />
    </div>
  );
};

export default DisplayItems;
