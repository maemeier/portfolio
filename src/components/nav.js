import React, { Component } from "react";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Iconbutton from "@material-ui/core/Iconbutton";
import SideDrawer from "./sideDrawer";

class Navigation extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow
            ? "var(--darkPink)"
            : "transparent",
          color: this.state.headerShow ? "var(--mainBlack)" : "var(--offWhite)",
          boxShadow: "none",
          padding: "20px 10px"
        }}
      >
        <Toolbar>
          <Iconbutton
            aria-lable="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </Iconbutton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          ></SideDrawer>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navigation;
