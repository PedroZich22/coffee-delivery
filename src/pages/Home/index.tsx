import { Intro } from "./components/Intro";
import { CoffeeListContainer } from "./style";

export function Home() {
  return (
    <div>
      <Intro />
      <CoffeeListContainer>
        <h1>Nossos Cafés</h1>
        <div></div>
      </CoffeeListContainer>
    </div>
  );
}
