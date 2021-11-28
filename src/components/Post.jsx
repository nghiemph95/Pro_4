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
        <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" title="My Post" />
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
