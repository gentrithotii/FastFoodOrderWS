import FoodItem from "./FoodItem";
import foodOrderData from "../exampledata/foodOrderData.json";

const DisplayItems = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        {foodOrderData.map((i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 my-2 px-4">
            <FoodItem
              image={i.image}
              title={i.title}
              descripton={i.description}
              price={i.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayItems;
