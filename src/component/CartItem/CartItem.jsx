import React, { useContext } from "react";
import Menu from "../Menu/Menu";
import { CartContext } from "../CartData/CartData";
import ViewCartItemDetails from "./ViewCartItemDetails";
import Footer from "../Footer/Footer";
// import CartItemPrice from "./CartItemPrice";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);

  let total = 0;

  for (const totalPrice of cart) {
    total = total + totalPrice.price;
  }

  const mainPrice = (30 * total) / 100;
  const totalPrice = total - mainPrice;
  console.log(cart);
  return (
    <div>
      <Menu></Menu>
      <div>
        <h2 className="text-3xl font-semibold p-5">
          An overview of your order
        </h2>
        <div className="flex gap-8">
          <div className="w-3/5">
            <div className="">
              {cart.map((cartItemDetails) => (
                <ViewCartItemDetails
                  key={cartItemDetails.id}
                  cartItemDetails={cartItemDetails}
                ></ViewCartItemDetails>
              ))}
            </div>
          </div>
          <div className="w-2/5">
            <h1 className="text-xl font-semibold p-5">
              Order Details
            </h1>
            <div>
              <div className="w-4/5 bg-slate-100 px-2 pt-3 rounded-xl">
                <div className="flex justify-between items-center my-3 text-[#656565] font-normal text-xl">
                  <p>Subtotal</p>
                  <p>$ {totalPrice.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center my-3 text-[#656565] font-normal text-xl">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between items-center my-3 text-[#656565] font-normal text-xl">
                  <p>Estimated Tax</p>
                  <p> $ </p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center my-3 font-semibold text-2xl">
                  <p>Subtotal</p>
                  <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <button className="text-white bg-black w-full px-2 py-1">GO TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CartItem;
