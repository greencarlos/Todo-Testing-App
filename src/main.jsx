import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
