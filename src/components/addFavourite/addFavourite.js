import React from "react";
import "./addFavourite.css";

const AddFavourite = (props) => {
  return (
    <div
      onClick={() => props.handleFavouriteMovie(props.movie)}
      className="favourite"
    >
      <i className="fas fa-heart" />
    </div>
  );
};

export default AddFavourite;
