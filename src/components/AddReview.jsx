import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import getCafe from "../pages/CafeDetailsPage"

function AddReview() {
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewDescription, setReviewDescription] = useState("")

  {/* As we have to update the Cafe; Store the _id of the new review in the reviews array of the cafe */}
  const [cafeModelReviewfield, setCafeModelReviewfield] = useState({ reviews: [] })

  const handleReviewTitle = (e) => { setReviewTitle(e.target.value) }
  const handleReviewDescription = (e) => { setReviewDescription(e.target.value) }

  const API_URL = import.meta.env.VITE_API_URL
  const storedToken = localStorage.getItem("authToken")
  const { id } = useParams()


  const handleSubmit = (e) => {
    e.preventDefault()

    const newReview = {
      title: reviewTitle,
      description: reviewDescription
    }

    const addReviewToCafe = {
      reviews: [cafeModelReviewfield]
    }

     {/* First, create new review. 
    Then add _id of review to cafe's array, 
    then update the detailpage (getCafe props) so it's displayed in the UI */}
    axios.post(`${API_URL}/reviews/${id}`, newReview, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => {
        console.log(response)
        const reviewId = response.data._id
        console.log("Review ID", reviewId)
        cafeModelReviewfield.reviews.push(reviewId)
        console.log("Cafe Model", cafeModelReviewfield)
        getCafe ()

        {/* continue here */} 
        return {/*axios.put(`${API_URL}/cafes/${id}`, addReviewToCafe, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
          .then(() => {
            console.log("I guess it worked")
          })
          .catch((err) => {
            console.log(err, "Nope didnt work! Messed up updateing the cafe")
          }) */}
      })
      .catch((err) => {
        console.log(err, "Nope didnt work! Messed up creating a review")
      })
  }

  return (
    <div>
      <label>
        Review Title
        <input
          type="text"
          name="reviewTitle"
          value={reviewTitle}
          placeholder="Give your review a title"
          onChange={handleReviewTitle}
        />
      </label>

      <div>
        <label>
          Review
          <input
            type="text"
            name="reviewDescription"
            value={reviewDescription}
            placeholder="Write a Review for the Café"
            onChange={handleReviewDescription}
          />
        </label>
        <button onClick={handleSubmit}> Submit a review</button>
      </div>
      {/* Tailwind Star Rating Code Here */}
    </div>
  );
}

export default AddReview;
