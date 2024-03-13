import React from "react"

function AverageRating() {
    const { id } = useParams();

    const API_URL = import.meta.env.VITE_API_URL

    const getCafe = () => {
        axios
          .get(`${API_URL}/cafes/${id}`)
          .then((response) => {
            console.log(response.data)
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      };
      useEffect(() => {
        getCafe();
      }, [id]);

    return (
        <>
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
        </>
    )
}

export default AverageRating
