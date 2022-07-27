import { useRouter } from "next/router";
import { FC, DragEvent, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";
import { dateFunctions } from "../../utils/";
interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging, isDragging } = useContext(UIContext);
  const router = useRouter();
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };
  const onDragEnd = () => {
    endDragging();
  };
  const onCardClick = () => {
    router.push(`/entries/${entry._id}`);
  };
  return (
    <Card
      sx={{ marginBottom: 1 }}
      elevation={10}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onCardClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "right", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
