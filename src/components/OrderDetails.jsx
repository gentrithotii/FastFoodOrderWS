const OrderDetails = () => {
  return (
    <div className="mt-5 p-3 border rounded">
      <h4>Your order</h4>
      <div className="row fw-bold border-bottom py-2">
        <div className="col">Order Details</div>
        <div className="col-auto">Price</div>
      </div>

      <div className="row align-items-center py-2 border-bottom">
        <div className="col">Cheeseburger</div>
        <div className="col-auto">
          <div className="btn-group">
            <button className="btn btn-outline-danger btn-sm">
              <i className="bi bi-dash">-</i>
            </button>
            <button className="btn btn-outline-secondary btn-sm" disabled>
              1
            </button>
            <button className="btn btn-outline-success btn-sm">
              <i className="bi bi-plus">+</i>
            </button>
          </div>
        </div>
        <div className="col-auto">SEK 99</div>
      </div>

      <div className="text-end fw-bold mt-3">Total: SEK 99</div>
    </div>
  );
};

export default OrderDetails;
