import PropTypes from "prop-types";
import "./App.css";

function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name ? props.name : "World"}</h1>{" "}
      {props.children ? props.children : null}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
};

Greeting.defaultProps = {
  name: "World",
};

export default Greeting;
