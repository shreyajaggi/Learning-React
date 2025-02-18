import { IMG_CDN_URL } from "../utils/constants";

const Card = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant?.cloudinaryImageId} />
      <h2>{props.restaurant?.name}</h2>
      <h3>{props.restaurant?.cuisine?.join(",")}</h3>
      <h4>{props.restaurant?.avgRating}</h4>
      <h4>{props.restaurant?.costForTwo}</h4>
      <h4>{props.restaurant?.locality}</h4>
    </div>
  );
};

export default Card;
