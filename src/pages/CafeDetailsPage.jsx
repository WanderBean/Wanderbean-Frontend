import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CafeDetailsPage() {
  const [cafe, setCafe] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  // Get data from specific cafe
  const getCafe = () => {
    axios
      .get(`${API_URL}/cafes/${id}`)
      .then((response) => {
        setCafe(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    getCafe();
  }, [id]);

  // Delete function
  const storedToken = localStorage.getItem("authToken");

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/cafes/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` }, // Send the JWT token to requests header
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {cafe === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="DetailPageContainer">
            <div>
              <img
                className="CafeDetailImg"
                src={cafe.image}
                alt={cafe.title}
              />
            </div>
            <div>
              <h1>{cafe.title}</h1>
              <p>{cafe.description}</p>
              {cafe.location && cafe.location.length > 0 && (
                <div>
                  <p>
                    {cafe.location[0].city}, {cafe.location[0].neighborhood}
                  </p>
                  <p>{cafe.location[0].adress}</p>{" "}
                  {/* Check again as Schema was changed */}
                </div>
              )}
              <div>
                {Array.isArray(cafe.specs) &&
                  cafe.specs.map((specs, index) => (
                    <label key={index}>{specs} </label>
                  ))}
              </div>
              {/* !!!!! DELETE BUTTON !!!!!! */}
              <button onClick={handleDelete}> Delete Café</button>
              {/* !!!!! EDIT BUTTON !!!!!! */}
              <button onClick={() => navigate("/cafes/edit/:id")}>
                Edit Café
              </button>
            </div>
          </div>
          {/* !!!!! REVIEW SECTION !!!!!! */}
          <h2>Reviews from fellow coffee lovers</h2>
          <div>
            {Array.isArray(cafe.reviews) &&
              cafe.reviews.map((review, index) => (
                <label key={index}>
                  <h3>{review.title}</h3>
                  <p>{review.description}</p>
                  {cafe.reviews.stars &&
                    cafe.reviews.stars > 0(<p>{cafe.reviews.stars}</p>)}
                </label>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CafeDetailsPage;
