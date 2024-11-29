import React, { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1 className="text-6xl font-semibold text-center text-purple-600">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-4 my-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
