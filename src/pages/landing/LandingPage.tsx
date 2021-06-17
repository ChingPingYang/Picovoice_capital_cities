import React from "react";
import {
  makeStyles,
  Theme,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Input from "../../components/common/Input";
import Card from "../../components/common/Card";
import { CountryData } from "../../utils/type";

interface LandingPageProps {
  value: string;
  handleOnValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSearch: (event: React.SyntheticEvent) => void;
  data: Array<CountryData>;
  loading: boolean;
  error: null | string;
}

const LandingPage = React.forwardRef(
  (
    {
      value,
      handleOnValueChange,
      handleOnSearch,
      data,
      loading,
      error,
    }: LandingPageProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Input
          ref={ref}
          value={value}
          handleOnValueChange={handleOnValueChange}
          handleOnSearch={handleOnSearch}
        />
        {loading ? (
          <CircularProgress size={70} className={classes.loading} />
        ) : error ? (
          <Typography variant="h5">{error}</Typography>
        ) : (
          <div className={classes.cardWrapper}>
            {data.map((country, index) => (
              <Card key={index} data={country} />
            ))}
          </div>
        )}
      </div>
    );
  }
);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "80%",
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  loading: {
    marginTop: 120,
  },
}));

export default LandingPage;
