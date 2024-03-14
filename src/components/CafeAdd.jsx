import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CafeAdd() {
  //state variables to store values of the inputs

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationNeighborhood, setLocationNeighborhood] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [specs, setSpecs] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined)

  //handler functions for the inputs

  const handleTitle = (e) => setTitle(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLocationCity = (e) => setLocationCity(e.target.value);
  const handlelocationNeighborhood = (e) =>
    setLocationNeighborhood(e.target.value);
  const handlelocationAddress = (e) => setLocationAddress(e.target.value);
  const handleSpecs = (e) => setSpecs(e.target.value);

  // Variables for context, database & navigate

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const storedToken = localStorage.getItem("authToken");

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
      .post(`${API_URL}/cafes`, newCafe, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        const cafeId = response.data._id;
        navigate(`/cafes/${cafeId}`);
        //getAllCafes();
      })
      .catch((error) => {
        console.log("Error adding new Cafe:", error);
        setErrorMessage(err.response.data.message)
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}
        className="flex-col py-10">
        <div className="flex justify-center mt-5 text-sm font-medium text-gray-900">
          <p className="text-sm border-solid border-2 border-black m-1 px-0.5 py-0.5 font-extrabold italic">
            Let's start with the basics.</p>
        </div>

        <div className="pt-3 text-sm font-medium text-gray-900">
          <label>
            Name*
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="title"
              value={title}
              placeholder="What's the name of the café?"
              onChange={handleTitle}
            />
          </label>
        </div>

        <div className="pt-3 text-sm font-medium text-gray-900">
          <label>
            Image*
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="image"
              value={image}
              placeholder="Add an image URL here"
              onChange={handleImage}
            />
          </label>
        </div>

        <div className="pt-3 text-sm font-medium text-gray-900">
          <label>
            Description*
            <textarea
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="description"
              value={description}
              placeholder="Add some details about your experience"
              onChange={handleDescription}
            />
          </label>
        </div>

        <div className="flex justify-center mt-5 text-sm font-medium text-gray-900">
          <p className="text-sm border-solid border-2 border-black m-1 px-0.5 py-0.5 font-extrabold italic">
            Where is it located?</p>
        </div>

        <div className="flex-col text-sm font-medium text-gray-900">
          <div>
            <label>
              City*
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="locationCity"
                value={locationCity}
                placeholder="Add the city here, e.g. Berlin"
                onChange={handleLocationCity}
              />
            </label>
          </div>

          <div>
            <div className="pt-3 text-sm font-medium text-gray-900">
              <label>
                Neighborhood
                <input
                  className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="locationNeighborhood"
                  value={locationNeighborhood}
                  placeholder="Add the neighborhood here, e.g. Spandau"
                  onChange={handlelocationNeighborhood}
                />
              </label>
            </div>
          </div>

          <div className="pt-3 text-sm font-medium text-gray-900">
            <label>
              Address*
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="locationAddress"
                value={locationAddress}
                placeholder="Add the exact address here"
                onChange={handlelocationAddress}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center mt-5 text-sm font-medium text-gray-900">
          <p className="text-sm border-solid border-2 border-black m-1 px-0.5 py-0.5 font-extrabold italic">
            What makes it special?</p>
        </div>

        <div className="pb-3 pt-3 text-sm font-medium text-gray-900">
          <label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="specs"
              value={specs}
              placeholder="Add some details & highlights here"
              onChange={handleSpecs}
            />
          </label>
        </div>

        {/* ERROR HANDLING */}
        <p className="flex justify-center mb-2 text-xs italic">*Field is required.</p>
        <div className="pb-2 flex justify-center text-xs text-red italic">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="flex justify-center py-5">
          <button
            className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-4 border border-black-200 shadow"
            type="submit">Add a Café</button>
        </div>
      </form>
    </>
  );
}

export default CafeAdd;
