import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publications = ({ currentPage, item }) => (
  <article className={styles.publication}>
    <h2>
      {currentPage}.{item.title}
    </h2>
    <p>{item.text}</p>
  </article>
);
export default Publications;
Publications.propTypes = {
  currentPage: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
