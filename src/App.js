import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import contentReducer from "./reducer/contentReducer";
import contentContext from "./context/contentContext";

import Header from "./components/Header";
import Page from "./pages/Page";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

import "./style.scss";

const App = () => {
  const [state, dispatch] = useReducer(contentReducer, []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      dispatch({ type: "INIT", data });
    };

    fetchData();
  }, []);

  return (
    <contentContext.Provider value={{ state, dispatch, search, setSearch }}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/pages/1" />
            </Route>

            <Route path="/pages/:page">
              <Header />
              <Page />
              <Pagination />
              <Footer />
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </contentContext.Provider>
  );
};

export default App;
