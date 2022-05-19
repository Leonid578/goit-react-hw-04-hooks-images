import React from 'react';
import style from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import * as Scroll from 'react-scroll';
import { fetchGalery } from 'utilits/fetchGalery'; // функция не делает сам запрос но хранит все настройки для поиска.
import { ToastContainer, toast } from 'react-toastify'; // попапы


class App extends React.Component {
  state = {
    pages: 1, //текущая страница
    searchWord: '', //поисковое слово
    arreyImg: [], //картинки с сервера
    modal: null, //рендерит либо нет модалку
    sceleton: false, //рендерит либо нет анимацию загрузки
    error: null, //хранит информацию об ошибках сервера
    buttonIs: false, // рендерит или нет кнопку еще
  };

  //это функция пропс для поискового запроса
  //при новом поисковом слове скинем страницу в первую.
  setSearchWord = searchWord => {
    this.setState({ searchWord: searchWord, pages: 1 });
  };

  //это функция пропс для кнопки листания страниц
  loadMore = () => {
    Scroll.animateScroll.scrollMore(600);
    this.setState(prevState => ({
      pages: prevState.pages + 1,
    }));
  };

  //запрос на сервер по сабмиту
  findImg = async isNew => {
    
    //рендерим загрузчик
    this.setState({ sceleton: true });
    try {
      const findImgsJSON = await fetch(
        fetchGalery(this.state.searchWord, this.state.pages)
      );
      const findImgs = await findImgsJSON.json();
      if (findImgs.totalHits === 0) {
        this.setState({ buttonIs: false });
        toast.warning(`We cant finde nosing`);
      } else if (findImgs.totalHits > this.state.pages * 12) {
        this.setState({ buttonIs: true });
        toast.success(
          `We finde ${this.state.pages * 12} of ${findImgs.totalHits} imeges`
        );
      } else if (findImgs.totalHits < this.state.pages * 12) {
        this.setState({ buttonIs: false });
        toast.warning(`We finde last imges of ${findImgs.totalHits} imeges`);
      }
      // и вызовем функцию отрисовки
      isNew ? this.renderNew(findImgs.hits) : this.renderMore(findImgs.hits);
    } catch (err) {
      this.setState({ error: err });
      toast.error(`Happend ${this.state.error}`);
    }
    //скрываем загрузчик
    this.setState({ sceleton: false });
  };

  //функция отрисовки переписывает стейт тем самым рендерит новые карточки
  renderMore = arreyImg => {
    this.setState(prevState => ({
      arreyImg: [...prevState.arreyImg, ...arreyImg],
    }));
  };

  renderNew = arreyImg => {
    this.setState(() => ({
      arreyImg: [...arreyImg],
    }));
  };

  // при изменении состояния поиска вызывает запрос
  componentDidUpdate(pProp, pState) {
    if (pState.searchWord !== this.state.searchWord) {
      this.findImg(true);
    } //если новое слово тру
    else if (pState.pages !== this.state.pages) {
      this.findImg(false);
    } //если старое слово фолс
  }

  onModalOpen = e => {
    console.log(e.target.dataset.img);
    this.setState(() => ({
      modal: e.target.dataset.img,
    }));
  };

  onModalClouse = () => {
    this.setState(() => ({
      modal: null,
    }));
  };

  render() {
    return (
      <div className={style.papers}>
        <Searchbar setSearchWord={this.setSearchWord} />
        <ImageGallery
          onModalOpen={this.onModalOpen}
          arreyImg={this.state.arreyImg}
        />
        {this.state.sceleton && <Loader />}
        {this.state.arreyImg.length > 0 && this.state.buttonIs === true && (
          <Button loadMore={this.loadMore} />
        )}
        {this.state.modal && (
          <Modal
            imgFull={this.state.modal}
            onModalClouse={this.onModalClouse}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
