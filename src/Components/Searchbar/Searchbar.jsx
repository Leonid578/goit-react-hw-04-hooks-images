import React from 'react';
import s from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import propTypes from 'prop-types';

class Searchbar extends React.Component {
  state = { searchWord: '' };

  onInpurWord = e => {
    this.setState({ searchWord: e.currentTarget.value.trim() });
  };

  //внутрений метод сабмита обрабатывающий событие
  formSubmit = event => {
    event.preventDefault();
    this.props.setSearchWord(this.state.searchWord);
    // this.reset(); // выяснил что не совсем удобно когда много листал забывал а что собственно ввел
  };

  // очистка формы
  reset = () => {
    this.setState({ searchWord: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.formSubmit}>
          <button type="submit" className={s.button}>
            <AiOutlineSearch className={s.search} />
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInpurWord}
            value={this.state.searchWord}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  setSearchWord: propTypes.func,
};
