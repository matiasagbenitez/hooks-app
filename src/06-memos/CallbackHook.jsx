import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  // useCallback es una forma de memorizar una función, de tal forma que si sus
  // dependencias no cambian, no se vuelva a ejecutar la función.
    const incrementFather = useCallback((value) => {
      setCounter((c) => c + value);
    }, []);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
}
