import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ advice, counter }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [advice]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="my-3" ref={pRef}>
          {advice ? advice : "Ocurrió un error al intentar obtener esta frase."}
        </p>
        <footer className="blockquote-footer">Quote {counter}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize, null, 3)}</code>
    </>
  );
};
