import CategoryItem from "./CategoryItem";
const Card = () => {
  return (
    <div className="border flex w-[900] rounded-3xl px-8 py-4 ">
      <div className=" mx-3 shrink-0">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="comany image"
        />
      </div>
      <div className=" px-8">
        <h2 className="text-2xl font-semibold inline-block">
          Social Media Assistant
        </h2>
        <p className=" my-3 text-gray-400">
          Young Men Chiristian Association - <span>Addis Ababa, Ethiopia</span>
        </p>
        <p className="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          repellendus dolorum libero ea repellat quis vero officia architecto
          modi enim unde molestiae in eveniet maiores excepturi ratione
          quisquam? Iste, aperiam?
        </p>
        <div className="flex">
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
};

export default Card;
