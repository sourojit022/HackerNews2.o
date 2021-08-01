import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
toast.configure();
export default function MenuAppBar() {
  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };
  const notify = () => {
    toast.success("Logout Successfull", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const user = window.localStorage.getItem("firstname");

  const ProductDi = () => {
    history.push("/LogIn");
  };
  const ProductD = () => {
    history.push("/Registration");
  };

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const home1 = () => {
    history.push("/");
  };
  const home2 = () => {
    history.push("/New");
  };
  const home3 = () => {
    history.push("/Past");
  };
  const home4 = () => {
    history.push("/Comments");
  };
  const home5 = () => {
    history.push("/Ask");
  };
  const home6 = () => {
    history.push("/Show");
  };
  const home7 = () => {
    history.push("/Jobs");
  };
  

  return (
    <div className={classes.root} style={{position:"fixed",zIndex:"999",top:"0",width:"100%"}}>
      <AppBar position="static" style={{background:"#0A1931"}}>
        <Toolbar>
          <Typography variant="h6" className="navi">
            <Link onClick={home1}>Hacker News 2.0</Link>
          </Typography>
          <Typography variant="h6" className="navi" id="navi1" >
            <Link onClick={home1}>New</Link>
          </Typography>
          <Typography variant="h6" className="navi">
            <Link onClick={home3}>Past</Link>
          </Typography>
          <Typography variant="h6" className="navi">
            <Link onClick={home4}>Comments</Link>
          </Typography>
          <Typography variant="h6" className="navi">
            <Link onClick={home5}>Ask</Link>
          </Typography>
          <Typography variant="h6" className="navi">
            <Link onClick={home6}>Show</Link>
          </Typography>
          <Typography variant="h6" className="navi">
            <Link onClick={home7}>Jobs</Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {localStorage.getItem("token") ? (
                <>
                  {/* <p>{user}</p> */}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        notify();
                        logout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={ProductDi}>Login</MenuItem>
                    <MenuItem onClick={ProductD}>Registration</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}