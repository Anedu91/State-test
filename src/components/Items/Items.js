import React from "react";
import cx from "classnames";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

function Items(props) {
  const buttonClassName = cx(
    "w-full p-2 bg-red-500	mt-3",
    props.animal.is_in_favorite && "opacity-50 cursor-not-allowed"
  );
  return (
    <div className="bg-gray-100 mb-5 ">
      <div className="px-3 flex items-center flex-wrap w-full">
        <img src={props.animal.avatar} alt={props.animal.name} />
        <div className="ml-5">
          <p>{props.animal.name}</p>
          <p>{props.animal.gender}</p>
        </div>
        <div className="flex flex-col ml-auto text-red-400">
          <button
            className="mb-2 hover:text-red-600 focus:outline-none"
            onClick={props.deleteAnimal}
          >
            <BsFillTrashFill />
          </button>
          <button
            className="focus:outline-none hover:text-red-600"
            onClick={props.animalToUpdate}
          >
            <AiFillEdit />
          </button>
        </div>
      </div>
      {/* <button className="px-3 flex items-center flex-wrap w-full hover:bg-gray-300 focus:outline-none">
      </button> */}

      <button
        disabled={props.animal.is_in_favorite}
        className={buttonClassName}
        onClick={props.toFavorite}
      >
        Add animal
      </button>
    </div>
  );
}

export default Items;
