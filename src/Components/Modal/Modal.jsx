import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import propTypes from 'prop-types';

export default class Modal extends Component {
  keyDownClouse = e => {
    if (e.code === 'Escape') {
      this.props.onModalClouse();
    }
  };
  componentDidMount(pProp, pState) {
    window.addEventListener('keydown', this.keyDownClouse);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownClouse);
  }

//   componentDidMount() {
//     const { onEsc } = this.props;
//     document.addEventListener('keydown', onEsc);
// }
// componentWillUnmount() {
//     const { onEsc } = this.props;
//     document.removeEventListener('keydown', onEsc);
// }
  render() {
    const {onModalClouse,imgFull } = this.props;
    return createPortal(
      
      <div className={s.overlay} onClick={onModalClouse}>
        <div className={s.modal}>
          <img className={s.img} src={imgFull} alt="" />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}
Modal.propTypes = { onModalClouse: propTypes.func };
