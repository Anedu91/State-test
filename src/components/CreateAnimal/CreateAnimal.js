import { React } from "react";
import cx from "classnames";

function CreateAnimal(props) {
  const containerClassName = cx(
    "flex flex-wrap mt-5 items-center pt-3",
    props.newAnimal.gender === "Female" ? "bg-pink-700" : "bg-blue-700"
  );
  const handleChange = (event) => {
    const animalNew = {
      ...props.newAnimal,
      avatar: `https://robohash.org/${props.newAnimal.name}.png?size=50x50&set=set4`,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.createAnimal(animalNew);
  };
  return (
    <>
      <h2 className="text-3xl mb-3">Create your Kitty</h2>
      <form action="" className="flex flex-col border border-black p-3">
        <label htmlFor="name">Introduce a name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-600 mt-2 mb-2 p-2"
          onChange={handleChange}
          value={props.newAnimal.name}
        />
        <label htmlFor="gender">Select a gender</label>
        <select
          name="gender"
          id="gender"
          className="mt-2 mb-2 p-3 bg-green-300"
          onChange={handleChange}
          value={props.newAnimal.gender}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </form>

      <div className={containerClassName}>
        <img
          src={props.newAnimal.avatar}
          className="ml-3"
          alt={props.newAnimal.avatar}
        />
        <div className="ml-6 text-white">
          <p>{props.newAnimal.name}</p>
          <p>{props.newAnimal.gender}</p>
        </div>
        <button
          className="w-full mt-5 bg-blue-300 p-3 hover:bg-blue-500 transition duration-500"
          onClick={props.addNewAnimal}
        >
          Create
        </button>
      </div>
    </>
  );
}

export default CreateAnimal;
