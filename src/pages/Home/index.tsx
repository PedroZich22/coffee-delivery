import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeListContainer, ListCoffee } from "./style";
import { coffees } from "../../utils/coffees.json";

export function Home() {
  return (
    <div>
      <Intro />
      <CoffeeListContainer>
        <h1>Nossos Cafés</h1>
        <ListCoffee>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </ListCoffee>
      </CoffeeListContainer>
    </div>
  );
}
