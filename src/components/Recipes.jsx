import React, { useState } from "react";

const leviathanAxe = {
  handle: 1,
  hacksilver: 10,
  silverignot: 5,
};

const bladeOfChaos = {
  ...leviathanAxe,
  bodyStripes: 4,
  magicPotion: 3,
};

console.log(leviathanAxe);
console.log(bladeOfChaos);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(leviathanAxe)}>leviathanAxe</button>
      <button onClick={() => setRecipe(bladeOfChaos)}>bladeOfChaos</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}:{recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
