import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loadedCoffee = useLoaderData();
  console.log(loadedCoffee);
  const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <>
      <h3>coffee:{coffees.length}</h3>
      <div className="grid grid-cols-2 gap-3">
        {coffees.map((coffee) => (
          <CoffeeCard
            setCoffees={setCoffees}
            coffee={coffee}
            key={coffee._id}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
