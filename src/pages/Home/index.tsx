import { api } from "../../services/api";
import { Coffee } from "../../types";
import { formatPrice } from "../../utils/format";
import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeListContainer, ListCoffee } from "./style";
import { useEffect, useState } from "react";

interface CoffeeFormatted extends Coffee {
  priceFormatted: string;
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeFormatted[]>([]);

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get<Coffee[]>("/coffees");
      const data = response.data.map<CoffeeFormatted>((coffee: Coffee) => ({
        ...coffee,
        priceFormatted: formatPrice(coffee.price),
      }));

      setCoffees(data);
    }

    loadCoffees();
  }, []);

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
