import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  getPageNum = () => {
    const locationPage = this.props.location.search;
    const searchParams = new URLSearchParams(locationPage);
    const currentPageNum = +searchParams.get('item');
    return currentPageNum;
  };

  render() {
    const currentPageNum = this.getPageNum();
    const { items } = this.props;
    const pages = items.length;
    if (!currentPageNum || currentPageNum > pages || currentPageNum <= 0) {
      return <Redirect to="/reader?item=1" />;
    }
    const currentPage = currentPageNum - 1;
    return (
      <div className={styles.reader}>
        <Controls
          currentPage={currentPageNum}
          pages={pages}
          handle={this.handleClick}
        />
        <Counter currentPage={currentPageNum} pages={pages} />
        <Publication currentPage={currentPageNum} item={items[currentPage]} />
      </div>
    );
  }
}

export default Reader;
Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
