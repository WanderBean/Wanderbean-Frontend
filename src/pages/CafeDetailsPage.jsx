import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function CafeDetailsPage() {

  const [cafe, setCafe] = useState("")

  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()
  const { id } = useParams()

  const getCafe = () => {
    axios.get(`${API_URL}/cafes/${id}`)
      .then((response) => {
        setCafe(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
      });
  }
  useEffect(() => {
    getCafe()
  }, [id])



  return (
    <div>
      {cafe === null
        ? <p>Loading...</p>
        : (
          <>
            <div className="DetailPageContainer">
              <div>
                <img className="CafeDetailImg" src={cafe.image} alt={cafe.title} />
              </div>
              <div>
                <h1>{cafe.title}</h1>
                <p>{cafe.description}</p>
                {cafe.location && cafe.location.length > 0 && (
                  <div>
                    <p>{cafe.location[0].city}, {cafe.location[0].neighborhood}</p>
                    <p>{cafe.location[0].adress}</p>                   {/* Check again as Schema was changed */}
                  </div>
                )}
                <div>{Array.isArray(cafe.specs) && cafe.specs.map((specs, index) => (
                  <label key={index}>{specs}</label>
                ))}</div>
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default CafeDetailsPage;
