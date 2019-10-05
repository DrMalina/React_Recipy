import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange, amber, lightBlue, cyan } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import RecipeList from "./RecipeList";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: amber
  }
});

const App = () => {
  const [term, setTerm] = useState("");
  const [query, searchQuery] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    searchQuery(term);
    setTerm("");
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <form className="search-form" onSubmit={onFormSubmit}>
          <input
            className="search-bar"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <RecipeList query={query} />
      </ThemeProvider>
    </div>
  );
};

export default App;
