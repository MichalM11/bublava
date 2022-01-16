import { useState } from "react";
import galleryClasses from "./Images.module.css";
import GalleryModal from "../UI/GalleryModal";
import ImageRenderer from "../../helpers/ImageRenderer";

const Images = (props) => {
  const [showGallery, setShowGallery] = useState(false);
  const [curImage, setCurImage] = useState(undefined);

  let img1src = props.img1.src;
  let img2src = props.img2.src;
  // let img3src = props.img3.src;

  const showFullGalHandler = (image) => {
    setShowGallery(true);
    setCurImage(image);
  };

  const closeFullGalleryHandler = () => {
    setShowGallery(false);
  };

  return (
    <section className={galleryClasses.wrap}>
      <div className={galleryClasses.gallery}>
        <ImageRenderer
          src={img1src}
          thumb={props.img1.thumb}
          imageClass={galleryClasses.img1}
          onImgClick={showFullGalHandler}
          imgData={props.img1}
        />

        <ImageRenderer
          src={img2src}
          thumb={props.img2.thumb}
          imageClass={galleryClasses.img2}
          onImgClick={showFullGalHandler}
          imgData={props.img2}
        />

        {/* <ImageRenderer
          src={img3src}
          thumb={props.img3.thumb}
          imageClass={galleryClasses.img3}
          onImgClick={showFullGalHandler}
          imgData={props.img3}
        /> */}
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

export default Images;
