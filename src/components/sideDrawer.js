import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";

const SideDrawer = props => {
  return (
    <Drawer anchor="top" open={props.open} onClose={() => props.onClose(false)}>
      <List componennet="nav">
        <Link to="/">
          <ListItem
            button
            onClick={() => console.log("Home")}
            style={{ alignText: "center", margin: "0 auto" }}
          >
            HOME
          </ListItem>
        </Link>

        <Link to="/coding">
          <ListItem button onClick={() => console.log("products")}>
            CODING
          </ListItem>
        </Link>

        <Link to="/aboutMe">
          <ListItem button onClick={() => console.log("contact")}>
            ABOUT ME
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
