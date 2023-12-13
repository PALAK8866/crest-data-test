import Images from '../data/imageGallery.json';

function ImageGallery({ category }: { category: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4">
      {Images.data
        .filter((imgSrc) =>
          category !== 'All' ? imgSrc.category === category : true,
        )
        .map((imgSrc) => {
          return (
            <img
              src={imgSrc.imageUrl}
              alt={imgSrc.name}
              className="w-full h-48 object-cover"
            />
          );
        })}
    </div>
  );
}

export default ImageGallery;
