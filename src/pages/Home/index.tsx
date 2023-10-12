import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeListContainer, ListCoffee } from "./style";

export function Home() {
  return (
    <div>
      <Intro />
      <CoffeeListContainer>
        <h1>Nossos Cafés</h1>
        <ListCoffee>
          <CoffeeCard />
        </ListCoffee>
      </CoffeeListContainer>
    </div>
  );
}
