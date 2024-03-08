import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CafeListPage() {
  const database = "http://localhost:5005";
  const [allCafes, setAllCafes] = useState([]);

  const getAllCafes = () => {
    axios
      .get(`${database}/cafes`)
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

  return (
    <>
      <div>
        {allCafes.map((cafe) => (
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

export default CafeListPage;
