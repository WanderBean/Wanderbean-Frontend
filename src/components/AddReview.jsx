import { useState } from "react";

function AddReview() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const handleReviewTitle = (e) => {
    setReviewTitle(e.target.value);
  };
  const handleReviewContent = (e) => {
    setReviewContent(e.target.value);
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
            name="reviewContent"
            value={reviewContent}
            placeholder="Write a Review for the Café"
            onChange={handleReviewContent}
          />
        </label>
      </div>
      {/* Tailwind Star Rating Code Here */}
    </div>
  );
}

export default AddReview;
