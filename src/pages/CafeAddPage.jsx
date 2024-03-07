import { AuthContext } from "../context/auth.context";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CafeAddPage() {
  //state variables to store values of the inputs

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationNeighborhood, setLocationNeighborhood] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [specs, setSpecs] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  //handler functions for the inputs

  const handleTitle = (e) => setTitle(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLocationCity = (e) => setLocationCity(e.target.value);
  const handlelocationNeighborhood = (e) =>
    setLocationNeighborhood(e.target.value);
  const handlelocationAddress = (e) => setLocationAddress(e.target.value);
  const handleSpecs = (e) => setSpecs(e.target.value);
  const handleReviewContent = (e) => setReviewContent(e.target.value);

  // Variables for context, database & navigate
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const database = "http://localhost:5005";

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCafe = {
      title,
      image,
      description,
      location: {
        city: locationCity,
        neighborhood: locationNeighborhood,
        address: locationAddress,
      },
      specs,
    };

    axios
      .post(`${database}/cafes`, newCafe)
      .then((response) => {
        const cafeId = response.data.id;
        const newReview = {
          cafeId,
          content: reviewContent,
        };

        return axios.post(`${database}/reviews`, newReview);
      })
      .then((reviewResponse) => {
        console.log("Review added here: ", reviewResponse.data);
      })
      .catch((error) => {
        console.log("Error adding new Cafe or Review:", error);
      });
  };

  return (
    <>
      <h1>Add a Café to your list</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={title}
              placeholder="What is the Café's name?"
              onChange={handleTitle}
            />
          </label>
        </div>

        <div>
          <label>
            Image
            <input
              type="text"
              name="image"
              value={image}
              placeholder="Add an image of the Café"
              onChange={handleImage}
            />
          </label>
        </div>

        <div>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Add a description"
              onChange={handleDescription}
            />
          </label>
        </div>

        <div>
          Location
          <div>
            <label>
              City
              <input
                type="text"
                name="locationCity"
                value={locationCity}
                placeholder="In which City is the Café?"
                onChange={handleLocationCity}
              />
            </label>
          </div>
          <div>
            <label>
              Neighborhood
              <input
                type="text"
                name="locationNeighborhood"
                value={locationNeighborhood}
                placeholder="In which Neighborhood is the Café?"
                onChange={handlelocationNeighborhood}
              />
            </label>
          </div>
          <div>
            <label>
              Address
              <input
                type="text"
                name="locationAddress"
                value={locationAddress}
                placeholder="What is the Address of the Café?"
                onChange={handlelocationAddress}
              />
            </label>
          </div>
        </div>

        <div>
          <label>
            Specifics
            <input
              type="text"
              name="specs"
              value={specs}
              placeholder="Add specific information about the Café"
              onChange={handleSpecs}
            />
          </label>
        </div>

        <div>
          <label>
            Review Content
            <textarea
              name="reviewContent"
              value={reviewContent}
              placeholder="Write a Review of the Café"
              onChange={handleReviewContent}
            />
          </label>
        </div>

        {/* Tailwind Star Rating Code Here */}

        <button type="submit">Add a Café</button>
      </form>
    </>
  );
}

export default CafeAddPage;
