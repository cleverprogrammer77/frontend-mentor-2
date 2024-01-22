import omelette from "../assets/images/image-omelette.jpeg";

const Header = () => {
  return (
    <>
      <div className="mx-auto max-w-[330px]">
        <img src={omelette} alt="omelette" />
      </div>
      <div className="p-6 max-w-[330px] mx-auto">
        <h1 className="font-youngSerif text-[40px] leading-tight max-w-[330px] mx-auto">
          Simple Omeltte Recipe
        </h1>
        <p className="font-outfit text-gray-600 mt-4 text-paragraph max-w-[330px] mx-auto">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten egg cooked to perfection, optionally filled with your
          choice of cheese vegetables, or meats.
        </p>
      </div>
    </>
  );
};

export default Header;
