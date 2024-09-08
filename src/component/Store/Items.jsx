import { TbShoppingBag } from "react-icons/tb";
// import { TbShoppingBag } from "react-icons/tb";

const Items = ({ item, handleAddToCart }) => {
  const { name, price, description, images } = item;

  const priceOff = (30*price)/100;
  const mainPrice = price - priceOff;
//   console.log(item);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2 h-5/6">
        <figure className="px-3 py-2">
          <img
            src={images}
            className="rounded-lg mt-14"
            alt={`${name} picture`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <div className="flex">
          <p className="text-lg font-bold">${mainPrice.toFixed(2)}</p>
          <p className="text-lg font-medium line-through text-[#ABABAB]">${price}</p>
          <p className="text-lg font-semibold text-red-500">30% OFF</p>
          </div>
          <p>{description}</p>
          
        </div>
        <button onClick={()=>handleAddToCart(item)} className="w-full bg-black px-2 py-2 text-white rounded flex items-center justify-center gap-3">
            <span><TbShoppingBag size={23}/></span> 
            <span>Add to cart</span></button>
      </div>
    </div>
  );
};

export default Items;
