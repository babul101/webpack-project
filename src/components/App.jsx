import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";
import Sword from "../images/swc-sword.png";
import SwordSvg from "../images/sword.svg";

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Ohh hi react </h1>
        </section>
        <img src={Sword} alt='Sword' width='250' />
        <img src={SwordSvg} alt='SwordSvg' width='250' />
        <Recipes />
      </main>
    </>
  );
};

export default App;
