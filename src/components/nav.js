import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
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
        <ToolBar>
          <IconButton
            aria-lable="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          ></SideDrawer>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navigation;
