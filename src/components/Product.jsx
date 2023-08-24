import React from "react";
import { StateContextCustom } from "../../Context";
import ProductList from "./ProductList";

const Product = () => {
  const {
    state: { product },
  } = StateContextCustom();
  // console.log(product)
  return (
    // <div>{data}</div>
    <div className="container  mx-auto flex gap-10 flex-wrap justify-center mt-6">
      {product?.map((e) => {
        return <ProductList key={e.id} {...e} />;
      })}
    </div>
  );
};

export default Product;
