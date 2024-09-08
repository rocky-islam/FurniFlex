import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import Items from "./Items";
import { TbShoppingBag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CartContext } from "../CartData/CartData";
import Menu from "../Menu/Menu";

const Store = () => {

    const {cart, setCart} =useContext(CartContext)

  const [store, setStore] = useState([]);
//   const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = "chairjson.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStore(data);
      });
  }, []);

  const handleAddToCart = (item) =>{
    console.log(item)
    const newCart = [...cart, item];
    setCart(newCart);
  }

//   const navLink = (
//     <>
//       <li className="mx-1 mb-1 lg:mb-0">
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li className="mx-1 mb-1 lg:mb-0">
//         <NavLink to="product">Products</NavLink>
//       </li>
//       <li className="mx-1 mb-1 lg:mb-0">
//         <NavLink to="category">Categories</NavLink>
//       </li>
//       <li className="mx-1 mb-1 lg:mb-0">
//         <NavLink to="custom">Custom</NavLink>
//       </li>
//       <li className="mx-1 mb-1 lg:mb-0">
//         <NavLink to="Blog">Blog</NavLink>
//       </li>
//     </>
//   );

  return (
    <div>
      <Menu></Menu>
      <main className="flex gap-8">
        <aside className="w-3/12 border-r-2 my-20">
          <div className="flex flex-col items-center">
            <button className="px-3 py-1 my-3 hover:bg-black hover:text-white text-xl border-b-2 font-semibold w-2/4 hover:rounded-lg">
              Rocking Chair
            </button>
            <button className="px-3 py-1 my-3 hover:bg-black hover:text-white text-xl border-y-2 font-semibold w-2/4 hover:rounded-lg">
              Side Chair
            </button>
            <button className="px-3 py-1 my-3 hover:bg-black hover:text-white text-xl border-y-2 font-semibold w-2/4 hover:rounded-lg">
              Lounge Chair
            </button>
          </div>
        </aside>
        <div className="w-9/12 my-20 ">
          <div className="grid grid-cols-3 gap-8">
            {store.map((item) => (
              <Items 
              key={item.id}
               item={item}
               handleAddToCart={handleAddToCart}
               ></Items>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
