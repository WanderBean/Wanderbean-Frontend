import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import logo from "../img/coffee-beans-white.png";

const featuredCafes = [
  "src/assets/images/Coffee_Collective_Copenhagen.jpg",
  "src/assets/images/Coffee_Fuglen_Tokyo.jpg",
  "src/assets/images/The_Barn_Berlin.jpg",
  "src/assets/images/Topos_Bookstore_Cafe_NewYork.jpg",
  "src/assets/images/Workshop_Coffee_Co._London.jpg",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     startSlider();
  //   }, []);

  //   const startSlider = () => {
  //     setInterval(() => {
  //       handleOnNextClick();
  //     }, 10000);
  //   };

  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCafes.length);
  };

  const handleOnPreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredCafes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full select-none relative aspect-w-16 aspect-h-9">
      <div className="w-full h-full relative">
        <img
          src={featuredCafes[currentIndex]}
          alt={`Cafe ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center border-solid border-4 border-white m-1 px-4 py-2">
        <span className="text-white text-4xl mr-4 font-extrabold italic">
          WanderBean
        </span>
        <img src={logo} alt="Wanderbeans Logo" className="max-h-10" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPreviousClick}>
          <GrPrevious className="text-7xl text-white" />
        </button>
        <button onClick={handleOnNextClick}>
          <GrNext className="text-7xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
