import React from "react";

const Ingredients = () => {
  return (
    <>
      {/* preparation box section */}
      <section className="rounded-lg max-w-[330px] mx-auto px-6 py-2 bg-primary-darkraspberry/30 leading-relaxed">
        <h1 className="font-bold font-outfit text-primary-darkraspberry mt-4">
          Preparation Time
        </h1>
        <ul className="list-disc px-6 marker:text-primary-darkraspberry">
          <li className="text-black">
            <span className="font-bold text-primary-darkraspberry">Total:</span>{" "}
            Approximately 10 minutes
          </li>
          <li>
            <span className="font-bold text-primary-darkraspberry">
              Preparation:
            </span>{" "}
            5 minutes
          </li>
          <li>
            <span className="font-bold text-primary-darkraspberry">
              Cooking:
            </span>{" "}
            5 minutes
          </li>
        </ul>
      </section>
      {/* ingredients section */}
      <section className="max-w-[330px] mx-auto">
        <h1 className="text-primary-nutmeg text-[30px] font-youngSerif mt-6">
          Ingredients
        </h1>
        <ul className="list-disc px-5 font-outfit marker:text-primary-darkraspberry leading-9 text-slate-600">
          <li>2, 3 large eggs</li>
          <li>salt, to taste</li>
          <li>pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li className="leading-5">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>
      <div className="max-w-[330px] mx-auto border-b-2 my-6"></div>
    </>
  );
};

export default Ingredients;
