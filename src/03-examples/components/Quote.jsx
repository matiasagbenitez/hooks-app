import React from "react";

export const Quote = ({ advice, counter }) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="my-3">
          {advice ? advice : "Ocurrió un error al intentar obtener esta frase."}
        </p>
        <footer className="blockquote-footer">Quote {counter}</footer>
      </blockquote>
    </>
  );
};
