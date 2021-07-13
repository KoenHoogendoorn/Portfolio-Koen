import React from "react";
import classes from "./HomePage.module.scss";
import { connect } from "react-redux";

import PortraitKoen from "../../assets/PortraitKoen.jpg";

import LinkComponent from "../../components/LinkComponent/LinkComponent";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import SignOffSection from "../SignOffSection/SignOffSection";

const HomePage = (props) => {
  const projectPreviewItems = props.projectsMetaData.map((project) => (
    <ProjectPreview
      key={`div-${project.id}`}
      name={project.name}
      id={project.id}
      image={project.imageSrc}
      alt={project.imageAlt}
      logo={project.logoSrc}
      logoAlt={project.logoAlt}
      textLogo={project.textLogo}
      tagline={project.tagline}
      to={`/${project.name
        .replace(/ +/g, "-")
        .replace(/'/g, "")
        .toLowerCase()}`}
    />
  ));

  return (
    <div className={classes.HomePage}>
      <div className={classes.IntroductionSection}>
        <img
          src={PortraitKoen}
          className={classes.PortraitKoen}
          alt="Portrait of Koen Hoogendoorn"
        ></img>
        <h1>Koen Hoogendoorn</h1>
        <p>Digital designer based in Vleuten, Utrecht</p>
        <LinkComponent internal={true} to={"/about-me"}>
          More about me
        </LinkComponent>
      </div>
      <div className={classes.ProjectsSection}>
        <h2 className={classes.ProjectsSectionTitle}>Projects</h2>
        <div className={classes.ProjectPreviewItems}>{projectPreviewItems}</div>
      </div>
      <SignOffSection aboutPage={false} detailPage={false} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projectsMetaData: state.projectsMetaData
  };
};

export default connect(mapStateToProps)(HomePage);
