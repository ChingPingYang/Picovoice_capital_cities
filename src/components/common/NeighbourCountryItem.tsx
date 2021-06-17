import {
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Neighbor } from "../../utils/type";

interface NeighbourCountryItemProps {
  data: Neighbor;
}

function NeighbourCountryItem({ data }: NeighbourCountryItemProps) {
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={data.flag} />
        </ListItemAvatar>
        <ListItemText secondary={`${data.name} - ${data.capital}`} />
      </ListItem>
      <Divider />
    </>
  );
}

const useStyles = makeStyles({});

export default NeighbourCountryItem;
