import React from "react";

import { Container, TextField, Button } from "@material-ui/core";

const SearchBar = ({ value, onInputChange, onFormSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <Container
      maxWidth="sm"
      component="form"
      style={{ marginTop: "60px" }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="search"
        label="Search for recipe"
        placeholder='Type ingredient, e.g. "chicken"'
        type="search"
        fullWidth
        onChange={e => onInputChange(e.target.value)}
        value={value}
      />
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: "30px" }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
