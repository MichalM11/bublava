import { useRef, useState } from "react";
import { useIntersection } from "../hooks/useObserver";
import classes from "./ImageRenderer.module.css";

const ImageRenderer = ({
  src,
  thumb,
  width,
  height,
  imageClass,
  onImgClick,
  imgData,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  const imageClasses = !isLoaded
    ? classes.image
    : classes.image + " " + classes.imageIsLoaded;

  const thumbClasses = !isLoaded
    ? classes.thumb
    : classes.thumb + " " + classes.thumbIsLoaded;

  return (
    <div
      className={classes.imageContainer + " " + imageClass}
      ref={imgRef}
      style={{
        width,
        height,
      }}
      onClick={() => {
        onImgClick(imgData);
      }}
    >
      {!isLoaded && <img className={thumbClasses} src={thumb} alt="Thumb" />}

      {isInView && (
        <>
          <img
            className={imageClasses}
            src={src}
            alt="Test"
            onLoad={handleOnLoad}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;
