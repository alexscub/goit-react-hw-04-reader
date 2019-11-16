import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, pages }) => (
  <p className={styles.counter}>
    {currentPage}/{pages}
  </p>
);

export default Counter;

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};
