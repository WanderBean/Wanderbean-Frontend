import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

function CafeList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allCafes, setAllCafes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllCafes = () => {
    axios
      .get(`${API_URL}/cafes`)
      .then((response) => {
        setAllCafes(response.data);
      })
      .catch((error) => {
        console.log("Error getting Cafes from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCafes();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const filteredCafes = allCafes.filter((cafe) => {
    const titleMatch = cafe.title.toLowerCase().includes(searchTerm);
    const cityMatch = cafe.location.some((location) =>
      location.city.toLowerCase().includes(searchTerm)
    );
    const neighborhoodMatch = cafe.location.some((location) =>
      location.neighborhood.toLowerCase().includes(searchTerm)
    );
    return titleMatch || cityMatch || neighborhoodMatch;
  });

  return (
    <>
      <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="pt-0 pb-7 px-7 flex flex-wrap justify-center mb-20 mt-10">
        {filteredCafes.map((cafe) => (
          <div
            key={cafe._id}
            className="mb-20 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-5 mb-5"
          >
            <Link to={`/cafes/${cafe._id}`}>
              <div className="h-72 w-full max-w-full overflow-hidden border-solid rounded-2xl">
                <img
                  src={cafe.image}
                  alt={cafe.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-bold uppercase bg-black text-white rounded-none mb-1 mt-4 mx-1 px-1.5 text-base italic leading-6 inline-block">
                {cafe.location[0].city}
              </p>
              <p className="font-bold uppercase bg-black text-white rounded-none mb-1 mt-4 mx-1 px-1.5 text-base italic leading-6 inline-block">
                {cafe.location[0].neighborhood}
              </p>
              <p className="font-bold">{cafe.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CafeList;
