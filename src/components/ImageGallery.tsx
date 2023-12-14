import { Dispatch, SetStateAction } from 'react';
import Images from '../data/imageGallery.json';

function ImageGallery({
  category,
  setOpenModal,
  handleImageClick,
}: {
  category: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleImageClick: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4">
      {Images.data
        .filter((imgSrc) =>
          category !== 'All' ? imgSrc.category === category : true,
        )
        .map((imgSrc, key) => {
          return (
            <img
              key={imgSrc.name}
              src={imgSrc.imageUrl}
              alt={imgSrc.name}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => handleImageClick(key)}
            />
          );
        })}
    </div>
  );
}

export default ImageGallery;
