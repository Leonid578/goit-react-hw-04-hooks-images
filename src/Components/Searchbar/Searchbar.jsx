import {useState} from 'react';
import s from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import propTypes from 'prop-types';

const Searchbar = ({setSearchWordProps}) =>  {
  const [searchWord, setSearchWord] = useState('')

  const onInpurWord = e => {
    setSearchWord(e.currentTarget.value.trim());
  };

  //внутрений метод сабмита обрабатывающий событие
  const formSubmit = event => {
    event.preventDefault();
    setSearchWordProps(searchWord);
  };

    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={formSubmit}>
          <button type="submit" className={s.button}>
            <AiOutlineSearch className={s.search} />
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={onInpurWord}
            value={searchWord}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  setSearchWord: propTypes.func,
};

export default Searchbar;