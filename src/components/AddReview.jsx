import { useState } from "react";

function AddReview() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");

  const handleReviewTitle = (e) => {
    setReviewTitle(e.target.value);
  };
  const handleReviewDescription = (e) => {
    setReviewDescription(e.target.value);
  };

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
      </div>
      {/* Tailwind Star Rating Code Here */}
    </div>
  );
}

export default AddReview;
