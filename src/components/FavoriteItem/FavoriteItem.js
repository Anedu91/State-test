import React from "react";
import cx from "classnames";

function FavoriteItem(props) {
  const containerClassName = cx(
    "flex items-center text-white p-2 mb-3",
    props.animal.gender === "Female" ? "bg-pink-700" : "bg-blue-700"
  );
  return (
    <div className={containerClassName}>
      <img src={props.animal.avatar} alt="" className="mr-4" />
      <p>{props.animal.name}</p>
      <button
        className="ml-auto text-2xl focus:outline-none"
        onClick={props.toFavorite}
      >
        &times;
      </button>
    </div>
  );
}

export default FavoriteItem;
