import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },

  media: {
    height: 250,
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/** Chèn hình ảnh */}
        <CardMedia className={classes.media} image="" title="My Post" />
        {/** Nội dung */}
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>{" "}
          {/** gutterBotton: tách header và content 1 khoảng */}
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/** Add button */}
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
