import style from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import propTypes from 'prop-types';

const Modal = ({onModalClouse, imgFull}) => {
  const mouseDownClouse = e => {
    if (e.target === e.currentTarget) {
      onModalClouse();
    }
  };
  
  useEffect(()=>{
    const keyDownClouse = e => {
      if (e.code === 'Escape') {
        onModalClouse();
      }
    };

    window.addEventListener('keydown', keyDownClouse);
    return () => {
      window.removeEventListener('keydown', keyDownClouse);
    };
  },[onModalClouse])

    return createPortal(
      <div className={style.overlay} onClick={mouseDownClouse}>
        <div className={style.modal}>
          <img className={style.img} src={imgFull} alt="" />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }

// Modal.propTypes = { onModalClouse: propTypes.func };
Modal.propTypes = { onModalClouse: propTypes.func, imgFull: propTypes.string };

export default Modal;
