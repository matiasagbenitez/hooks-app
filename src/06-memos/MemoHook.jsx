import { useCounter } from "../hooks";
import React, { useMemo, useState } from "react";

// Esta función es muy pesada, por lo que no queremos que se vuelva a ejecutar
// cada vez que se renderiza el componente MemoHook.
const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Here we go...");
  }
  return `${iterations} iterations done.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1500);
  const [show, setShow] = useState(true);

  // useMemo es una forma de memorizar el resultado de una función, de tal forma
  // que si sus dependencias no cambian, no se vuelva a ejecutar la función.
  // En este caso, si el valor de counter no cambia, no se vuelve a ejecutar
  // la función heavyStuff.
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      {/* Valor guardado */}
      <p>{memorizeValue}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
