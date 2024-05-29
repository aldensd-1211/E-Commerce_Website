import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (114)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Discover the latest trends and timeless styles at Stile, where fashion
          meets quality. Our curated collection offers a diverse range of
          clothing, from chic dresses and casual wear to sophisticated work
          attire and cozy loungewear. Whether you're looking for the perfect
          outfit for a special occasion or everyday essentials, we have
          something for every style and budget.
        </p>
        <p>
          Sign up for our newsletter to receive exclusive offers, early access
          to new arrivals, and style tips from our fashion experts. Follow us on
          social media for daily inspiration and connect with fellow fashion
          enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
