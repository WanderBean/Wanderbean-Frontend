import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import logo from "../img/coffee-beans-white.png";
import { Link } from "react-router-dom";

const featuredCafes = [
  {
    id: "65f2b7931ac3ed6d4564eb76",
    image: "src/img/Coffee_Collective_Copenhagen.jpg",
  },
  { id: "65f2cdce1ac3ed6d4564ec91", image: "src/img/Coffee_Fuglen_Tokyo.jpg" },
  { id: "65eee387390cd13035bd12ca", image: "src/img/The_Barn_Berlin.jpg" },
  {
    id: "65f2d01f1ac3ed6d4564ecbd",
    image: "src/img/Topos_Bookstore_Cafe_NewYork.jpg",
  },
  {
    id: "65f2cf451ac3ed6d4564eca6",
    image: "src/img/Workshop_Coffee_Co._London.jpg",
  },
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
        <Link to={`/cafes/${featuredCafes[currentIndex].id}`}>
          <img
            src={featuredCafes[currentIndex].image}
            alt={`Cafe ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </Link>
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
