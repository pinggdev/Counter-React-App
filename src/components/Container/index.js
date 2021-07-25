/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import styles from "./Container.module.css";

import PropTypes from "prop-types";

const Container = (props) => {
  return <section className={styles.container}>{props.children}</section>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
