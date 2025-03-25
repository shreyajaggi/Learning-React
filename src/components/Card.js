import { IMG_CDN_URL } from "../utils/constants";

const Card = (props) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        className="w-48 h-36 p-2 m-2"
        src={IMG_CDN_URL + props.restaurant?.cloudinaryImageId}
      />
      <h2 className="font-bold text-lg">{props.restaurant?.name}</h2>
      <h3 className="text-sm">{props.restaurant?.cuisines?.join(", ")}</h3>
      <h4 className="text-sm">{props.restaurant?.avgRating}</h4>
      <h4 className="text-sm">{props.restaurant?.costForTwo}</h4>
      <h4 className="text-sm">{props.restaurant?.locality}</h4>
    </div>
  );
};

export default Card;
