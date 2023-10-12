import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus weight="fill" />
      </button>
      <span>0</span>
      <button>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  );
}
