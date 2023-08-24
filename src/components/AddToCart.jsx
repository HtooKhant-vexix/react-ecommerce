import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../../Context";
import Cart from "./Cart";

const AddToCart = () => {
  const {
    state: { cart },
  } = StateContextCustom();

  const [mainTotal, setMainTotal] = useState(0);
  const total = cart?.reduce((pv, cv) => pv + cv.price, 0);
  useEffect(() => {
    setMainTotal(total);
    console.log(cart);
  }, []);

  const Intotal = (price) => {
    return setMainTotal(mainTotal + price);
  };
  const Detotal = (price) => {
    return setMainTotal(mainTotal - price);
  };
  console.log(cart);
  return (
    <div>
      <div>
        {cart?.map((e) => {
          return <Cart key={e.id} {...e} Detotal={Detotal} Intotal={Intotal} />;
        })}
      </div>
      <hr />
      <div className="flex justify-between max-w-[650px] mt-4  mx-auto">
        <p>Total</p>
        <p>${mainTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddToCart;
