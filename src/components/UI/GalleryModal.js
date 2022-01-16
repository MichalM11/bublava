import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import classes from "./GalleryModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hasThumbnails, setHasThumbnails] = useState(true);

  let images = props.images.map((img) => {
    return {
      src: img.src,
      thumb: img.thumb,
      alt: img.alt,
      id: img.id,
    };
  });

  useEffect(() => {
    if (window.innerHeight < 700 || window.innerWidth < 700) {
      setHasThumbnails(false);
    }
  }, []);

  const closeGalleryHandler = () => {
    setShowModal(false);

    setTimeout(() => {
      props.onClose();
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  }, []);

  const modalClasses = !showModal
    ? classes.modal
    : classes.modal + " " + classes.showModal;

  return (
    <div className={modalClasses}>
      <FontAwesomeIcon
        icon={faTimes}
        size="4x"
        color="#fff2e6"
        className={classes.icon}
        onClick={closeGalleryHandler}
        title="Skrýt galerii"
      />
      <div className={classes.container}>
        <div className={classes.carouselWrap}>
          <Carousel
            images={images}
            className={classes.carousel}
            index={+props.curImage.id.split("i")[1] - 1}
            shouldMaximizeOnClick={true}
            Thumbnails={props.images.map((img) => img.thumb)}
            hasThumbnailsAtMax={hasThumbnails}
            thumbnailWidth="10rem"
            thumbnailHeight="10rem"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

const GalleryModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          images={props.images}
          onClose={props.onClose}
          curImage={props.curImage}
        />,
        document.querySelector("#overlay-root")
      )}
    </Fragment>
  );
};

export default GalleryModal;
