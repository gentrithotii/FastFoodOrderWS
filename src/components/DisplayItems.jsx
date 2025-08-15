import FoodItem from "./FoodItem";
import foodOrderData from "../exampledata/foodOrderData.json";
import OrderDetails from "./OrderDetails";

const DisplayItems = () => {
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
            />
          </div>
        ))}
      </div>

      <OrderDetails />
    </div>
  );
};

export default DisplayItems;
