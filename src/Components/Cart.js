import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
// import RestaurantMenu from './RestaurantMenu';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty. Please add items to cart!!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
