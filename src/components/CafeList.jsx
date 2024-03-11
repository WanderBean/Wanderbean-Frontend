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

  const filteredCafes = allCafes.filter((cafe) =>
    cafe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div>
        {filteredCafes.map((cafe) => (
          <div key={cafe._id}>
            <Link to={`/cafes/${cafe._id}`}>
              <img src={cafe.image} alt={cafe.title} />
              <p>{cafe.title}</p>
              <p>{cafe.location[0].city}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CafeList;
