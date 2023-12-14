import { useEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';

function App() {
  const [category, setCategory] = useState<string>('All');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageId, setImageId] = useState<number>();

  const handleImageClick = (id: number) => {
    setImageId(id);
    setOpenModal(true);
  };

  useEffect(() => {
    if (openModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [openModal]);
  return (
    <div className="p-2 ">
      <Header />
      <div className="mx-8 my-8 lg:mx-16">
        <h1 className="text-center text-2xl font-bold mb-2">Photo Gallery</h1>
        <p className="text-center mb-8">
          Welcome to the photo gallery of indian cricketers.
        </p>
        <div className="flex flex-wrap justify-center	gap-4 lg:flex basis-1">
          <Button
            text="All"
            active={category === 'All'}
            setCategory={setCategory}
          />
          <Button
            text="Batsman"
            active={category === 'Batsman'}
            setCategory={setCategory}
          />
          <Button
            text="Bowler"
            active={category === 'Bowler'}
            setCategory={setCategory}
          />
          <Button
            text="All-Rounder"
            active={category === 'All-Rounder'}
            setCategory={setCategory}
          />
        </div>
        <ImageGallery
          category={category}
          setOpenModal={setOpenModal}
          handleImageClick={handleImageClick}
        />
        <ImageModal
          open={openModal}
          imageId={imageId || 0}
          category={category}
          setImageId={setImageId}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
}

export default App;
