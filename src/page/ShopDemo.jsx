import DisplayItems from "../components/DisplayItems";

const ShopDemo = () => {
  return (
    <div className="container py-4">
      <div className="mb-3">
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-moon me-1"></i> Dark
        </button>
      </div>

      <DisplayItems />
    </div>
  );
};

export default ShopDemo;
