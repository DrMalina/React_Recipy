import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[600]
    },
    secondary: orange
  }
});

const App = () => {
  const [term, setTerm] = useState("");
  const [query, searchQuery] = useState(null);

  const onFormSubmit = () => {
    if (term) {
      searchQuery(term);
      setTerm("");
    }
  };

  const onInputChange = inputValue => {
    setTerm(inputValue);
  };

  const renderResultList = () => {
    //only display results when there is a query
    if (query) {
      return <RecipeList query={query} />;
    }
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <SearchBar
          value={term}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
        />
        {renderResultList()}
      </ThemeProvider>
    </div>
  );
};

export default App;
