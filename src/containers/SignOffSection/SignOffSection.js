import React from "react";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import classes from "./SignOffSection.module.scss";

const SignOffSection = (props) => {
  return (
    <div className={classes.SignOffSection}>
      <hr className={classes.Divider} />
      <h2>I'm currently looking for new opportunities</h2>
      <div className={classes.SignOffLinks}>
        <div className={classes.LinkContainer}>
          <LinkComponent
            internal={false}
            alignedLeft={true}
            to="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
          >
            &#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
          </LinkComponent>
        </div>
        <div className={classes.LinkContainer}>
          <LinkComponent
            to="https://linkedin.com/in/koen-hoogendoorn-0853a290"
            internal={false}
            alignedLeft={true}
          >
            LinkedIn
          </LinkComponent>
        </div>
        <div className={classes.LinkContainer}>
          <LinkComponent
            to="https://github.com/KoenHoogendoorn"
            internal={false}
            alignedLeft={true}
          >
            GitHub
          </LinkComponent>
        </div>
        {props.aboutPage ? null : (
          <div className={classes.LinkContainer}>
            <LinkComponent internal={true} alignedLeft={true} to={"/about-me"}>
              About
            </LinkComponent>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignOffSection;
