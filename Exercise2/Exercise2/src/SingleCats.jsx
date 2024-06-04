function SingleCats(props) {
  return (
    <li>
      {props.prop1}
      <span> {props.prop2}</span>
      {props.imageUrl && (
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.imageUrl}
          alt={props.prop1}
        />
      )}
    </li>
  );
}

export default SingleCats;
