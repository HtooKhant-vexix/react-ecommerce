import { useState } from "react";
import { StateContextCustom } from "../../Context";

const Cart = ({ id, title, price, image, Intotal, Detotal }) => {
  const item = { id, title, price, image };
  const [increse, setIncrese] = useState(1);
  const inPrice = price * increse;
  const qtyIn = () => {
    setIncrese(increse + 1);
    Intotal(price);
  };
  const qtyDe = () => {
    if (increse > 1) {
      setIncrese(increse - 1);
      Detotal(price);
    }
  };

  const { dispatch } = StateContextCustom();

  const del = () => {
    dispatch({ type: "DEL_BTN", payload: id });
    Detotal(inPrice);
  };

  return (
    <div className="container max-h-[300px] bg-slate-200 my-4 p-5 rounded-md align-middle max-w-[700px] mx-auto flex justify-between">
      <div className="flex my-aut0">
        <img src={image} alt="" className="h-[100px]" />
        <div className="ms-5 ">
          <p>{title}</p>
          <p>{inPrice.toFixed(2)}</p>
          <p onClick={del} className="text-red-500">
            Remove
          </p>
        </div>
      </div>
      <div>
        <p onClick={() => qtyIn()}>
          <button>+</button>
        </p>
        <p>{increse}</p>
        <p onClick={() => qtyDe()}>
          <button>-</button>
        </p>
      </div>
    </div>
  );
};

export default Cart;
