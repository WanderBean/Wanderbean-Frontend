import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AddReview from "../components/AddReview";
import { FaStar, FaRegCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
  const isLoggedIn = storedToken !== null;

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
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="flex justify-center p-10">
                <img
                  className="max-w-full h-auto"
                  src={cafe.image}
                  alt={cafe.title}
                />
              </div>

              <div>
                <h1 className="text-5xl p-10 flex justify-center">{cafe.title}</h1>
                <p className="text-1xl px-10 pb-5 flex justify-center">{cafe.description}</p>
                {cafe.location && cafe.location.length > 0 && (
                  <div className="px-10 flex justify-center">
                    <p>
                      <FaLocationDot className="inline mr-1" />
                      {cafe.location[0].city}, {cafe.location[0].neighborhood}
                    </p>
                    <p>{cafe.location[0].address}</p>{" "}
                    {/* Check again as Schema was changed */}
                  </div>
                )}
                <div className="px-10 flex justify-center">
                  <FaRegCheckCircle className="inline mr-1 mt-1" />

                  {Array.isArray(cafe.specs) &&
                    cafe.specs.map((specs, index) => (
                      <label key={index}>{specs}. </label>
                    ))}
                </div>

                {/* !!!!! DELETE & EDIT BUTTONS !!!!!! */}
                {isLoggedIn === true ? (
                  <div className="px-10 py-5 flex justify-center">
                    <div className="flex flex-col sm:flex-row">
                      <button className="bg-white hover:bg-gray-100 hover:bg-grey text-gray font-semibold py-2 px-4 border border-gray-200 shadow"
                        onClick={handleDelete}>Delete Café</button>
                      <button className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-4 border border-black-200 shadow"
                        onClick={() => navigate(`/cafes/edit/${id}`)}>Edit Café</button>
                    </div>

                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* !!!!! REVIEW SECTION !!!!!! */}
          <div className="my-10">
            {isLoggedIn === true ? (
              <div>
                <h2 className="text-3xl">Leave us a review</h2>
                <AddReview getCafe={getCafe} />
              </div>
            ) : null}
            <h2 className="text-3xl flex justify-center pt-10">
              Reviews from fellow coffee lovers
            </h2>
            {Array.isArray(cafe.reviews) &&
              cafe.reviews.map((review, index) => (
                <label key={index}>
                  
                  {/* Displaying the stars depending on the rating in the database */}
                  <div className="flex items-center space-x-1 flex justify-center pt-10">
                    {[...Array(5)].map((stars, index) => {
                      return (
                        <label key={index}>
                          <input type="radio" name="stars" value={index} />
                          <FaStar
                            className="star"
                            size={25}
                            color={index < review.stars ? "#ffc107" : "#e4e5e9"}
                          />
                        </label>
                      );
                    })}
                  </div>
                  <h3 className="flex items-center space-x-1 flex justify-center text-2xl">{review.title}</h3>
                  <h4 className="flex items-center space-x-1 flex justify-center text-xs italic">by {review.user}</h4>
                  <p className="flex items-center space-x-1 flex justify-center">{review.description}</p>
                </label>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CafeDetailsPage;
