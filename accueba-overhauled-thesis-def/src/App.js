import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/root";
import { AppRouter } from "./routes/routes";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
