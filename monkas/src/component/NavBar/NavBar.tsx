import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      borderRadius: 8,
    },
    tool: {
      background: "#2f363d",
      boxShadow: "2px",
    },
    menu: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tool}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menu}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Monkas
          </Typography>

          <IconButton
            edge="start"
            className={classes.menu}
            color="inherit"
            aria-label="menu"
          >
            <NotificationsNoneIcon />
          </IconButton>
          <Button
            color="inherit"
            className={classes.button}
            href="https://github.com/claudiolau/monkas-store"
          >
            <GitHubIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
