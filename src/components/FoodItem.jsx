const FoodItem = ({ title, image, description, price, handleAddItem }) => {
  return (
    <div className="card h-100">
      {image ? (
        <img src={image} className="card-img-top" alt={description} />
      ) : (
        <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
          <i className="bi bi-image fs-1"></i>
        </div>
      )}

      <div className="card-body d-flex flex-column text-start">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">SEK {price}</p>
        <button
          className="btn btn-primary w-100 mt-auto"
          onClick={() => {
            let item = {
              orderTitle: title,
              orderPrice: price,
              orderQuantity: 1,
              totalOrderPrice: price,
            };
            handleAddItem(item);
          }}
        >
          Add to order
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
