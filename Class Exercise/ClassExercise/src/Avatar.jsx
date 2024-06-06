function Avatar(props) {
  return <img className="Avatar" src={props} alt={props.author.name} />;
}

export default Avatar;
