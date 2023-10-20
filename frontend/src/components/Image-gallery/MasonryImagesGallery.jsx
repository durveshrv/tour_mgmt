import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
  // Convert the galleryImages object into an array of image URLs
  const imageUrls = Object.values(galleryImages);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {imageUrls.map((imageUrl, index) => (
          <img className='masonry_img'
            src={imageUrl}
            key={index}
            alt=""
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
