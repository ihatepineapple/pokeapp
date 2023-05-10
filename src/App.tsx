import React from "react";
import "./App.css";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  console.log(data)
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species?.name}</h3>
          <img src={data.sprites?.front_shiny} alt={data.species?.name} />
        </>
      ) : null}
    </div>
  );
}

export default App;
