import React from "react";
import useRecipes from "./useRecipes";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Typography,
  Container,
  Link,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  media: {
    width: "100%"
  },
  card: {
    border: "1px solid orange"
  },
  calories: {
    fontWeight: "700"
  },
  source: {
    fontStyle: "italic",
    color: "#1976d2"
  },
  loading: {
    textTransform: "uppercase",
    marginTop: "60px"
  }
}));

//helper fn to shorten long titles for display
const shortenString = (string, characterLimit) => {
  if (string.length > characterLimit) {
    return `${string.substr(0, characterLimit)}...`;
  } else {
    return string;
  }
};

const RecipeList = ({ query }) => {
  const classes = useStyles();
  const [recipes, isLoading] = useRecipes(query);

  const renderList = () => {
    if (isLoading) {
      //display loader if results are being loaded
      return (
        <Grid item xs={12}>
          <CircularProgress />
          <Typography
            variant="h5"
            align="center"
            color="secondary"
            gutterBottom
            className={classes.loading}
          >
            Loading...
          </Typography>
        </Grid>
      );
    } else {
      //if finished loading display results
      return (
        <Grid container justify="center" spacing={3}>
          {recipes.map((recipe, index) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={recipe.recipe.image}
                  alt=""
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    gutterBottom
                    style={{ fontWeight: "700" }}
                  >
                    {shortenString(recipe.recipe.label, 25)}{" "}
                    {/*shorten if too long */}
                  </Typography>
                  <Typography variant="body2" component="p" paragraph>
                    Calories:{" "}
                    <Typography
                      variant="body2"
                      component="span"
                      paragraph
                      className={classes.calories}
                    >
                      {Math.floor(recipe.recipe.calories)}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" component="p" paragraph>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href={recipe.recipe.url}
                      className={classes.source}
                    >
                      Source: {recipe.recipe.source}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Container maxWidth="md" component="section" style={{ marginTop: "60px" }}>
      <Grid container justify="center">
        {renderList()}
      </Grid>
    </Container>
  );
};

export default RecipeList;
