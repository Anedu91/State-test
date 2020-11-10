import React from "react";

function Form(props) {
  const handleChange = (event) => {
    const updatedAnimal = {
      ...props.toUpdate,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.updateAnimal(props.toUpdate.id, updatedAnimal);
  };
  return (
    <>
      <h2 className="text-3xl mb-3">Change your Kitty</h2>
      <form
        action=""
        className="relative flex flex-col border border-black p-3"
      >
        <button
          className="text-2xl absolute right-0 top-0 mr-3"
          onClick={props.closeForm}
        >
          &times;
        </button>
        <label htmlFor="name">Introduce a new name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-600 mt-2 mb-2 p-2"
          value={props.toUpdate ? props.toUpdate.name : ""}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender change</label>
        <select
          name="gender"
          id="gender"
          className="mt-2 mb-2 p-3 bg-green-300"
          value={props.toUpdate ? props.toUpdate.gender : ""}
          onChange={handleChange}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </form>
    </>
  );
}

export default Form;
