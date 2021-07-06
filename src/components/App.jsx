import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Ohh hi react </h1>
        </section>
      </main>
      <Recipes />
    </>
  );
};

export default App;
