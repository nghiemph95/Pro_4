import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    /* Tao bóng mờ cho ô search */
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&: hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) =>
        props.open
          ? "flex"
          : "none" /** If props open is True, make Flex, if false, make none */,
    },
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },

  searchButton: {
    marginRight: theme.spacing(2),
  },

  icons: {
    display: "flex",
    alignItems: "center",
  },

  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Market Online
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Test
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
