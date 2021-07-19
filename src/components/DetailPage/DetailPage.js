import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import ReactMarkdown from "react-markdown";

import classes from "./DetailPage.module.scss";

import SignOffSection from "../../containers/SignOffSection/SignOffSection";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const DetailPage = (props) => {
  const location = useLocation();

  const [enlargedImageSrc, setEnlargedImageSrc] = useState("");

  const closeModal = () => {
    setEnlargedImageSrc("");
    document.body.classList.remove(classes.StopScroll);
  };

  const openModal = (event) => {
    setEnlargedImageSrc(event.currentTarget.attributes[0].nodeValue);
    document.body.classList.add(classes.StopScroll);
  };

  const imageElement = ({ node, ...props }) => {
    const enlargedImage = (
      <span className={classes.BlackLayerModal} onClick={() => closeModal()}>
        <img
          className={classes.EnlargedImage}
          onClick={(event) => event.stopPropagation()}
          {...props}
        />
        <button className={classes.CloseIcon}>
          <i className="fas fa-times" onClick={() => closeModal()}></i>
        </button>
      </span>
    );

    const normalSizedImage = (
      <img onClick={(event) => openModal(event)} {...props} />
    );

    let image = normalSizedImage;

    if (enlargedImageSrc === props.src) {
      image = enlargedImage;
    }

    return image;
  };

  const projectContent = (
    <React.Fragment>
      <ScrollToTopOnMount />
      <div className={classes.ContentContainer}>
        <h1 className={classes.ProjectTitle}>{props.name}</h1>
        <p className={classes.Tagline}>{props.tagline}</p>
        <ReactMarkdown
          className={classes.Content}
          components={{
            img: ({ node, ...props }) => imageElement({ node, ...props })
          }}
          linkTarget="_blank"
        >
          {props.content}
        </ReactMarkdown>
      </div>
      <SignOffSection
        aboutPage={false}
        detailPage={true}
        location={location.pathname}
      />
    </React.Fragment>
  );

  const aboutContent = (
    <React.Fragment>
      <div className={classes.ContentContainer}>
        <h1 className={classes.ProjectTitle}>{props.name}</h1>
        <p className={classes.Tagline}>{props.tagline}</p>
        <ReactMarkdown
          className={classes.Content}
          components={{
            img: ({ node, ...props }) => imageElement({ node, ...props })
          }}
          linkTarget="_blank"
        >
          {props.content}
        </ReactMarkdown>
      </div>
      <SignOffSection aboutPage={true} detailPage={false} />
    </React.Fragment>
  );

  return (
    <div className={classes.DetailPage}>
      {props.id === "p-about" ? aboutContent : projectContent}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projectsMetaData: state.projectsMetaData,
    pages: state.pages
  };
};

export default connect(mapStateToProps)(DetailPage);
