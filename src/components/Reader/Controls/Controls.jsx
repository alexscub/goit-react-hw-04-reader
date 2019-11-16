import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Controls.module.css';

const Controls = ({ currentPage, pages }) => (
  <section className={styles.controls}>
    <Link
      to={`/reader?item=${currentPage - 1}`}
      className={styles.button}
      disabled={!(currentPage - 1)}
    >
      Назад
    </Link>
    <Link
      to={`/reader?item=${currentPage + 1}`}
      className={styles.button}
      disabled={currentPage === pages}
    >
      Вперед
    </Link>
  </section>
);

export default Controls;
Controls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};
