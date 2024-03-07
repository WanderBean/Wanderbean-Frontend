import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


function CafeDetailsPage() {

  const [cafe, setCafe] = useState("")

  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()
  const { id } = useParams()

  const getCafe = () => {
    axios.get(`${API_URL}/cafes/${id}`)
      .then((response) => {
        setCafe(response.data)
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
      });
  }
  useEffect(() => {
    getCafe()
  }, [id])



  return (
    <>
      <h1>I am a Cafe Details Page</h1>
    </>
  );
}

export default CafeDetailsPage;
