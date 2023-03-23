import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { HooksApp } from "./HooksApp";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { SimpleFormWCH } from "./02-useEffect/SimpleFormWCH";

import "./index.css";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <SimpleFormWCH /> */}
    <MultipleCustomHooks />
  </React.StrictMode>
);
