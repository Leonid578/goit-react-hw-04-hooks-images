import s from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func,
};

export default Button;