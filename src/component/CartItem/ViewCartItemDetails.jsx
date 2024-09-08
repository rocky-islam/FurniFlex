import { useContext } from "react";
import { CartContext } from "../CartData/CartData";


const ViewCartItemDetails = ({cartItemDetails}) => {

    const {cart, setCart} = useContext(CartContext);

    const handleDeleteCart = (e) =>{
        console.log('click cart: ', e);
        const remaining = cart.filter(product => product.id !== e);
        setCart(remaining);
    }

    const {name, images, price, id} = cartItemDetails;

    const priceOff = (30*price)/100;
    const mainPrice = price - priceOff;

    return (
        <div className="w-3/4 mx-auto bg-slate-100 p-4">
            <div className="flex justify-between items-center border-2 px-2">
                <div className="flex gap-4 items-center justify-center my-4  px-8 py-2">
                    <img src={images} alt="" className="w-[88px] rounded-xl" />
                    <p className="font-medium">{name}</p>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <span onClick={()=>handleDeleteCart(id)} className="font-medium cursor-pointer px-2 hover:bg-red-600">X</span>
                    <p className="font-medium">$ {mainPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewCartItemDetails;