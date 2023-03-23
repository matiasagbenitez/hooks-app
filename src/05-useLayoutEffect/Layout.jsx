import { useCounter, useFetch } from "../hooks";
import { Loading, Quote } from "../03-examples/components";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.adviceslip.com/advice/${counter}`
  );

  const { id, advice } = (!!data && data.slip) || {};

  return (
    <>
      <h1>Quotes</h1>
      <hr />

      {isLoading ? <Loading /> : <Quote advice={advice} counter={counter} />}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
