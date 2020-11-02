import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";

import * as api from "../../api";
import Items from "../../components/Items";
import FavoriteItem from "../../components/FavoriteItem";
import ChangeForm from "../../components/ChangeForm";

function Home(props) {
  const [animals, setAnimals] = useState(api.Animals.list());
  const [toUpdate, setToUpdate] = useState();
  const [toDelete, setToDelete] = useState();

  const toFavorite = (id) => {
    setAnimals(
      animals.map((animal) => {
        if (animal.id === id) {
          return {
            ...animal,
            is_in_favorite: animal.is_in_favorite ? false : true,
          };
        }
        return animal;
      })
    );
  };

  const animalToUpdate = (id) => {
    setToUpdate(id);
  };
  const updateAnimal = (id, updatedAnimal) => {
    const copyAnimals = [...animals];

    setAnimals(
      copyAnimals.map((animal) => {
        if (id === animal.id) {
          return { ...updatedAnimal };
        }
        return animal;
      })
    );
  };
  const deleteAnimal = (id) => {
    const copyAnimals = [...animals];
    setAnimals(copyAnimals.filter((animal) => animal.id !== id));
  };
  const loadList = () => {
    setAnimals(api.Animals.list());
  };
  return (
    <DefaultLayout>
      <div className="">
        <h2 className="text-3xl mb-3">List of animals</h2>
        <ul className="h-screen overflow-y-auto">
          {animals.map((animal) => (
            <li key={animal.id}>
              <Items
                animal={animal}
                toFavorite={() => toFavorite(animal.id)}
                animalToUpdate={() => animalToUpdate(animal.id)}
                deleteAnimal={() => deleteAnimal(animal.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="text-3xl mb-3">Favorite Animals</h2>
        <ul className="h-screen overflow-y-auto">
          {animals
            .filter((animal) => animal.is_in_favorite)
            .map((animal) => (
              <li key={animal.id}>
                <FavoriteItem
                  animal={animal}
                  toFavorite={() => toFavorite(animal.id)}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="">
        <ChangeForm
          toUpdate={animals.filter((animal) => animal.id === toUpdate)[0]}
          updateAnimal={updateAnimal}
        />
      </div>
    </DefaultLayout>
  );
}

export default Home;
