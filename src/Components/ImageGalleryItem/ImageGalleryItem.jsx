import s from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <li className={s.galleryItem}>
      <img
        src={webformatURL}
        data-img={largeImageURL}
        alt={tags}
        className={s.galleryImg}
        width={500}
      />
    </li>
  );
};


ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  tags: propTypes.string,
};

export default ImageGalleryItem;