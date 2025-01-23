const Card = (props) => {
  return (
    <div className="card">
      <img src={props.restraunt?.img} />
      <h2>{props.restraunt?.name}</h2>
      <h3>{props.restraunt?.cuisine?.join(",")}</h3>
      <h4>{props.restraunt?.rating}</h4>
    </div>
  );
};

export default Card;
