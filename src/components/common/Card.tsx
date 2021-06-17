import {
  Paper,
  makeStyles,
  Typography,
  List,
  Theme,
  ListSubheader,
} from "@material-ui/core";
import NeightbourCountryItem from "./NeighbourCountryItem";
import { CountryData, Neighbor } from "../../utils/type";

interface CardProps {
  data: CountryData;
}
type StyleProps = {
  flag: string;
};

function Card({ data }: CardProps) {
  const classes = useStyles({ flag: data.flag });
  return (
    <Paper elevation={2} className={classes.root}>
      <div className={classes.imageWrapper}>
        <div className="image" />
        <div className="imageMask" />
        <div className="textWrapper">
          <Typography variant="body2">Capital City</Typography>
          <Typography variant="h6">{data.capital}</Typography>
        </div>
      </div>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Neighbouring Countries
          </ListSubheader>
        }
      >
        {data.neighbors &&
          data.neighbors.map((neighbor: Neighbor, index: number) => (
            <NeightbourCountryItem key={index} data={neighbor} />
          ))}
      </List>
    </Paper>
  );
}

const useStyles = makeStyles<Theme, StyleProps>({
  root: {
    position: "relative",
    width: 250,
    alignSelf: "flex-start",
    overflow: "hidden",
    margin: 10,
    zIndex: -10,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    "& .image": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: (props) => `url(${props.flag})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: -1,
      filter: "blur(1px)",
    },
    "& .imageMask": {
      width: "100%",
      height: 140,
      backgroundColor: "black",
      opacity: 0.7,
    },
    "& .textWrapper": {
      width: "100%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
  },
});

export default Card;
