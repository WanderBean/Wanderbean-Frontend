import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CafeEdit() {
  const API_URL = import.meta.env.VITE_API_URL;
  const storedToken = localStorage.getItem("authToken");
  const { id } = useParams();
  const navigate = useNavigate();

  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLocationCity, setEditLocationCity] = useState("");
  const [editLocationNeighborhood, setEditLocationNeighborhood] = useState("");
  const [editLocationAddress, setEditLocationAddress] = useState("");
  const [editSpecs, setEditSpecs] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/cafes/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      }) //<--seems to be the issue
      .then((response) => {
        setEditTitle(response.data.title);
        setEditImage(response.data.image);
        setEditDescription(response.data.description);

        const location = response.data.location[0];
        setEditLocationCity(location.city);
        setEditLocationNeighborhood(location.neighborhood);
        setEditLocationAddress(location.address);
        setEditSpecs(response.data.specs);
      })
      .catch((error) => {
        console.log("Error getting Cafe details from the API...");
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editCafe = {
      title: editTitle,
      image: editImage,
      description: editDescription,
      location: [
        {
          city: editLocationCity,
          neighborhood: editLocationNeighborhood,
          address: editLocationAddress,
        },
      ],
      specs: editSpecs,
    };

    axios
      .put(`${API_URL}/cafes/${id}`, editCafe, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/cafes/${id}`);
      })
      .catch((error) => {
        console.log("Error updating Café...");
        console.log(error);
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
              Name
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="title"
                value={editTitle}
                placeholder="Edit Café's name"
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </label>
          </div>

          <div className="pt-3 text-sm font-medium text-gray-900">
            <label>
              Image
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="image"
                value={editImage}
                placeholder="Edit image of the Café"
                onChange={(e) => setEditImage(e.target.value)}
              />
            </label>
          </div>

          <div className="pt-3 text-sm font-medium text-gray-900">
            <label>
              Description
              <textarea
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="description"
                value={editDescription}
                placeholder="Edit description"
                onChange={(e) => setEditDescription(e.target.value)}
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
              City
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="locationCity"
                value={editLocationCity}
                placeholder="Edit City"
                onChange={(e) => setEditLocationCity(e.target.value)}
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
                  value={editLocationNeighborhood}
                  placeholder="Edit Neighborhood"
                  onChange={(e) => setEditLocationNeighborhood(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="pt-3 text-sm font-medium text-gray-900">
            <label>
              Address
              <input
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="locationAddress"
                value={editLocationAddress}
                placeholder="Edit Address"
                onChange={(e) => setEditLocationAddress(e.target.value)}
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
            value={editSpecs}
            placeholder="Edit specifics"
            onChange={(e) => setEditSpecs(e.target.value)}
          />
        </label>
      </div>

      <div className="flex justify-center py-5">
        <button
          className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-4 border border-black-200 shadow"
          type="submit">Edit the Café</button>
      </div>
    </form>
    </>
  );
}

export default CafeEdit;
