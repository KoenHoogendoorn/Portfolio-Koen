import React from "react";
import classes from "./NavigationBar.module.scss";

import LinkComponent from "../../components/LinkComponent/LinkComponent";

const NavigationBar = (props) => (
  <nav className={classes.NavigationBar}>
    <LinkComponent internal={true} logo={true} to={"/"}>
      KH
    </LinkComponent>
    <div className={classes.NavigationLinks}>
      <LinkComponent internal={true} navigationItem={true} to={"/"}>
        Work
      </LinkComponent>
      <LinkComponent internal={true} navigationItem={true} to={"/about-me"}>
        About
      </LinkComponent>
    </div>
  </nav>
);

export default NavigationBar;
