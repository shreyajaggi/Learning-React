import { useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="p-10 m-10">
      <h1>Cart</h1>
      <ul className="pt-5">
        {cartItems?.map((item) => {
          return <FoodItemCard key={item.id} cartItems={item} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
