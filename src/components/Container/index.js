/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import PropTypes from "prop-types";

const Container = (props) => {
  return <section className="container">{props.children}</section>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
