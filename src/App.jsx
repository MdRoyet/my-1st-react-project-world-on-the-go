import { Suspense } from "react";
import "./App.css";
import Countries from "./Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <h1></h1>
      <Suspense fallback={<h3>Loaaaaaaaaaaaaaaaaaading.........</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
