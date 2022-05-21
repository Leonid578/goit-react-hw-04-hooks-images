import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

const ImageGallery = ({ onModalOpen, arreyImg }) => {
  return (
    <ul onClick={onModalOpen} className={s.imageGallery}>
      {arreyImg.map(impg => {
        return (
          <ImageGalleryItem
            key={impg.id}
            tags={impg.tags}
            largeImageURL={impg.largeImageURL}
            webformatURL={impg.webformatURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  onModalOpen: propTypes.func,
  arreyImg: propTypes.array,
};

export default ImageGallery;