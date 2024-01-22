import React from "react";

const Nutrition = () => {
  return (
    <>
      <section className="max-w-[330px] mx-auto">
        <h2 className="text-[30px] font-youngSerif text-primary-darkraspberry">
          Nutrition
        </h2>
        <p className="font-outfit text-slate-600">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div className="my-4">
          <div className="flex border-b-2 justify-around font-outfit text-slate-600 py-2">
            <p>Calories</p>
            <p className="text-primary-darkraspberry font-bold">277kcal</p>
          </div>
          <div className="flex border-b-2 justify-around font-outfit py-2">
            <p>Carbs</p>
            <p className="text-primary-darkraspberry font-bold">0g</p>
          </div>
          <div className="flex border-b-2 justify-around font-outfit py-2">
            <p>Protein</p>
            <p className="text-primary-darkraspberry font-bold">20g</p>
          </div>
          <div className="flex justify-around font-outfit py-2">
            <p>Fat</p>
            <p className="text-primary-darkraspberry font-bold">22g</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;
