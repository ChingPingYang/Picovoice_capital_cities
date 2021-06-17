import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

interface InputProps {
  value: string;
  handleOnValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSearch: (event: React.SyntheticEvent) => void;
}

const Input = (
  { value, handleOnValueChange, handleOnSearch }: InputProps,
  ref: React.Ref<HTMLInputElement>
) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onSubmit={handleOnSearch}>
      <InputBase
        inputRef={ref}
        className={classes.input}
        placeholder="Search A Country"
        inputProps={{ "aria-label": "search for a country" }}
        value={value}
        fullWidth
        onChange={handleOnValueChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    margin: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
}));

export default React.forwardRef(Input);
