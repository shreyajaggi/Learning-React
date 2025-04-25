import { IMG_CDN_URL } from "../utils/constants";

const FoodItemCard = ({ cartItems }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        className="w-48 h-36 p-2 m-2"
        src={IMG_CDN_URL + cartItems?.imageId}
      />
      <h2 className="font-bold text-lg">{cartItems?.name}</h2>
      <h4 className="text-sm">{cartItems?.description}</h4>
    </div>
  );
};

export default FoodItemCard;
