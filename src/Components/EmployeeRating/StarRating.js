 import ReactStars from "react-rating-stars-component";
import React from "react";

function StartRating(props) {
  const ratingChanged = (newRating) => {};
  return (
    <div>
      <ReactStars
        count={5}
        value={Number(props.value)}
        onChange={ratingChanged}
        isHalf={false}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
}
export default StartRating;
