import s from './Button.module.css';
import React from 'react';
import propTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  loadMore: propTypes.func,
};
