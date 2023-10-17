export interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CartCoffee extends Coffee {
  amount: number;
}
