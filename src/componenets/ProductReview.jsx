import React from "react";
import ProductReviewCard from "../componenets/ProductReviewCard.jsx";
import '../styles/ProductReview.css';
const ProductReview = ({ productReview }) => {
  return (
    <div className="productReview">
      {productReview.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReview;
