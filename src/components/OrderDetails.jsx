const OrderDetails = ({
  orderList,
  handleAddQuantity,
  handleRemoveQuantity,
}) => {
  const total = orderList.reduce((sum, item) => sum + item.totalOrderPrice, 0);

  return (
    <div className="mt-5 p-3 border rounded">
      <h4>Your order</h4>
      <div className="row fw-bold border-bottom py-2">
        <div className="col">Order Details</div>
        <div className="col-auto">Price</div>
      </div>

      {orderList.map((item, index) => (
        <div className="row align-items-center py-2 border-bottom" key={index}>
          <div className="col-4">
            <p className="">{item.orderTitle}</p>
          </div>
          <div className="col-4 text-center">
            <div className="btn-group">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleRemoveQuantity(item.orderTitle)}
              >
                <i className="bi bi-dash">-</i>
              </button>
              <button className="btn btn-outline-secondary btn-sm" disabled>
                {item.orderQuantity}
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => handleAddQuantity(item.orderTitle)}
              >
                <i className="bi bi-plus">+</i>
              </button>
            </div>
          </div>
          <div className="col-4 text-end">
            SEK {item.totalOrderPrice.toFixed(2)}
          </div>
        </div>
      ))}

      <div className="text-end fw-bold mt-3">Total: SEK {total.toFixed(2)}</div>
    </div>
  );
};

export default OrderDetails;
