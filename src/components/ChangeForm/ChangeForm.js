import React from "react";

function Form(props) {
  const handleChange = (event) => {
    console.log(event.currentTarget.value);
    const updatedAnimal = {
      ...props.toUpdate,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.updateAnimal(props.toUpdate.id, updatedAnimal);
  };
  return (
    <>
      <h2 className="text-3xl mb-3">Change your Animal</h2>
      <form action="" className="flex flex-col border border-black p-3">
        <label htmlFor="name">Introduce a name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-600 mt-2 mb-2 p-2"
          value={props.toUpdate ? props.toUpdate.name : ""}
          onChange={handleChange}
        />
        <select
          name="gender"
          id=""
          className="mt-2 mb-2 p-3"
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
