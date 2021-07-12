import React from "react";
import { Link } from "react-router-dom";
import classes from "./LinkComponent.module.scss";

const LinkComponent = (props) => {
  let linkClasses = `${classes.Link} `;

  if (props.alignedLeft) {
    linkClasses += `${classes.Left} `;
  }
  if (props.logo) {
    linkClasses += `${classes.Logo} `;
  }
  if (props.navigationItem) {
    linkClasses += `${classes.NavigationItem} `;
  }

  const externalLink = (
    <a
      className={linkClasses}
      href={props.to}
      target={"_blank"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );

  const internalLink = (
    <Link className={linkClasses} to={props.to}>
      {props.children}
    </Link>
  );

  return props.internal ? internalLink : externalLink;
};

export default LinkComponent;
