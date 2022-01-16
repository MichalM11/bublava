import { useState } from "react";
import { Element } from "react-scroll";
import fullGalleryClasses from "./FullGallery.module.css";
import GalleryModal from "../UI/GalleryModal";
import Image from "../UI/Image";

const FullGallery = (props) => {
  const [showGallery, setShowGallery] = useState(false);
  const [curImage, setCurImage] = useState(undefined);

  const prevImages = [
    props.images[0],
    props.images[1],
    props.images[3],
    props.images[5],
    props.images[8],
    props.images[10],
  ];

  const showFullGalHandler = (image) => {
    setShowGallery(true);
    setCurImage(image);
  };

  const closeFullGalleryHandler = () => {
    setShowGallery(false);
  };

  return (
    <section className={fullGalleryClasses.wrap}>
      <Element name="gallery" />
      <div className={fullGalleryClasses.fullGallery}>
        <Image images={prevImages} showFullGalHandler={showFullGalHandler} />
      </div>

      {showGallery && (
        <GalleryModal
          images={props.images}
          onClose={closeFullGalleryHandler}
          curImage={curImage}
        />
      )}
    </section>
  );
};

export default FullGallery;
