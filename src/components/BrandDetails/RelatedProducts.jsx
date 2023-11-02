import React from "react";
import "./RelatedProducts.css";
import RelatedProductCard from "./RelatedProductCard";
const RelatedProducts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="d-flex gap-4 justify-content-center align-items-center flex-column">
            <p className="relatedProducts mb-5">Related Products</p>
            <div className="d-flex gap-4 justify-content-center align-items-center flex-wrap ">
              <RelatedProductCard
                cardHeading={"Vitamin Enriched Face Base"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                imagePath={"/images/Bobbi Brown.jpg"}
              />
              <RelatedProductCard
                cardHeading={"Long Wear Cream Shadow Stick"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                imagePath={"/images/brown.png"}
              />
              <RelatedProductCard
                cardHeading={"Skin Long-Wear Weightless Foundation SPF 15k"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                imagePath={"/images/brown.png"}
              />
              <RelatedProductCard
                cardHeading={"Highlighting Powder"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                imagePath={"/images/brown.png"}
              />
              <RelatedProductCard
                cardHeading={"Crushed Oil-Infused Gloss"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                imagePath={"/images/brown.png"}
              />
              <RelatedProductCard
                cardHeading={"Vitamin Enriched Face Base"}
                cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                imagePath={"/images/brown.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
