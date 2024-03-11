import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CafeEdit() {
  const database = "http://localhost:5005";
  const { id } = useParams();
  //console.log("cafeId:", cafeId);  Add this line to check the value
  const navigate = useNavigate();

  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLocationCity, setEditLocationCity] = useState("");
  const [editLocationNeighborhood, setEditLocationNeighborhood] = useState("");
  const [editLocationAddress, setEditLocationAddress] = useState("");
  const [editSpecs, setEditSpecs] = useState("");

  useEffect(() => {
    console.log(`Fetching data for cafeId:, ${id}`); //outcome->Fetching data for cafeId: undefined
    axios
      .get(`${database}/cafes/${id}`) //<--seems to be the issue
      .then((response) => {
        setEditTitle(response.data.title);
        setEditImage(response.data.image);
        setEditDescription(response.data.description);
        setEditLocationCity(response.data.locationCity);
        setEditLocationNeighborhood(response.data.locationNeighborhood);
        setEditLocationAddress(response.data.locationAddress);
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
      locationCity: editLocationCity,
      locationNeighborhood: editLocationNeighborhood,
      locationAddress: editLocationAddress,
      specs: editSpecs,
    };

    axios
      .put(`${database}/cafes/${id}`, editCafe)
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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="title"
                value={editTitle}
                placeholder="Edit Café's name"
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Image
              <input
                type="text"
                name="image"
                value={editImage}
                placeholder="Edit image of the Café"
                onChange={(e) => setEditImage(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Description
              <input
                type="text"
                name="description"
                value={editDescription}
                placeholder="Edit description"
                onChange={(e) => setEditDescription(e.target.value)}
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
                  value={editLocationCity}
                  placeholder="Edit City"
                  onChange={(e) => setEditLocationCity(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Neighborhood
                <input
                  type="text"
                  name="locationNeighborhood"
                  value={editLocationNeighborhood}
                  placeholder="Edit Neighborhood"
                  onChange={(e) => setEditLocationNeighborhood(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Address
                <input
                  type="text"
                  name="locationAddress"
                  value={editLocationAddress}
                  placeholder="Edit Address"
                  onChange={(e) => setEditLocationAddress(e.target.value)}
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
                value={editSpecs}
                placeholder="Edit specifics"
                onChange={(e) => setEditSpecs(e.target.value)}
              />
            </label>
          </div>

          <button type="submit">Edit the Café</button>
        </form>
      </div>
    </>
  );
}

export default CafeEdit;
