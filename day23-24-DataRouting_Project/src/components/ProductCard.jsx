const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden w-64 border border-purple-100"
      style={{ boxShadow: "0 4px 24px rgba(80,60,180,0.09)" }}
    >
      {/* Image */}
      <div
        className="relative h-44 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #ede7f6, #e3f2fd)" }}
      >
        <span
          className="absolute top-3 left-3 text-xs font-medium text-white px-3 py-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #6c47ff, #c02cdd)" }}
        >
          New
        </span>
        <img
          src={product.images[0]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-1"
          style={{ color: "#9b7fe8" }}
        >
          {product.category}
        </p>
        <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug line-clamp-1">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #6c47ff, #c02cdd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ${product.price}
          </span>
          <span className="text-sm text-gray-400 line-through">$120.00</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 rounded-xl text-sm font-medium text-white cursor-pointer"
            style={{ background: "linear-gradient(90deg, #6c47ff, #c02cdd)" }}
          >
            Add to Cart
          </button>
          <button
            className="flex-1 py-2 rounded-xl text-sm font-medium border cursor-pointer"
            style={{ color: "#7c5cbf", borderColor: "#e0d7ff" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
