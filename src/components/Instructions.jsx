import React from "react";

const Instructions = () => {
  return (
    <>
      <section className="max-w-[330px] mx-auto">
        <h2 className="font-youngSerif text-[30px] text-primary-darkraspberry">
          Instructions
        </h2>
        <ol className="list-decimal marker:text-primary-darkraspberry marker:font-bold pl-6 leading-6">
          <li className="pl-2">
            <span className="font-bold font-outfit">Beat the eggs:</span> In a
            bowl, beat the eggs with a pinch of salt and pepper until they are
            well mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li className="pl-2">
            <span className="font-bold font-outfit">Heat the pan:</span> Place a
            non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="pl-2">
            <span className="font-bold font-outfit">Cook the omelette:</span>{" "}
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </li>
          <li className="pl-2">
            <span className="font-bold font-outfit">
              Add fillings (optional):
            </span>{" "}
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li className="pl-2">
            <spa className="font-bold font-outfit" n>
              Fold and serve:
            </spa>{" "}
            As the omelette continues to cook, carefully life one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </li>
          <li className="pl-2">
            <span className="font-bold font-outfit">Enjoy:</span> Serve hot,
            with additional salt and pepper if needed.
          </li>
        </ol>
      </section>
      <div className="border-b-2 my-6 max-w-[330px] mx-auto"></div>
    </>
  );
};

export default Instructions;
