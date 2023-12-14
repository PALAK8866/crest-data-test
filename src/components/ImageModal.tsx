import { Dispatch, SetStateAction, useRef } from 'react';
import Images from '../data/imageGallery.json';

function ImageModal({
  open,
  imageId,
  category,
  setImageId,
  setOpenModal,
}: {
  open: boolean;
  imageId: number;
  category: string;
  setImageId: Dispatch<SetStateAction<number | undefined>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  if (!open) {
    return <> </>;
  }

  const mainImage = Images.data.filter((imgSrc) =>
    category !== 'All' ? imgSrc.category === category : true,
  )[imageId];

  const subImages = Images.data.filter((imgSrc) =>
    category !== 'All' ? imgSrc.category === category : true,
  );

  return (
    <div className="overflow-y-hidden overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 backdrop-blur-100 backdrop-blur-sm z-50">
      <div className="mx-auto w-10/12 mt-32  p-4 border rounded-sm	bg-white z-100 md:w-8/12 lg:6/12 lg:mt-8">
        <div className="flex items-start justify-between mb-4">
          <p className="font-semibold">{mainImage.name}</p>
          <button
            className="text-black h-6 w-6 text-xl block outline-none"
            onClick={() => setOpenModal(false)}
          >
            x
          </button>
        </div>

        <img
          src={mainImage.imageUrl}
          alt={mainImage.name}
          className="w-full h-64 mb-4 md:h-96"
        />
        <div className="flex align-middle justify-center gap-1">
          <button
            onClick={() =>
              setImageId(imageId > 0 ? imageId - 1 : subImages.length - 1)
            }
            className="p-1 align-middle  border-none font-bold"
          >
            {'<'}
          </button>
          <div className="flex flex-nowrap gap-1 overflow-scroll">
            {subImages.map((sImage, key) => {
              return (
                <img
                  key={sImage.name}
                  src={sImage.imageUrl}
                  alt={sImage.name}
                  className={`w-24 h-16 ${
                    key === imageId ? 'border-8	 border-lime-500' : ''
                  } md:w-23 h-24`}
                  onClick={() => setImageId(key)}
                />
              );
            })}
          </div>
          <button
            onClick={() =>
              setImageId(imageId >= subImages.length - 1 ? 0 : imageId + 1)
            }
            className="p-1 align-middle  border-none font-bold"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
