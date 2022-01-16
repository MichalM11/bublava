import { Fragment } from "react";

import fullGalleryClasses from "../layout/FullGallery.module.css";

const Image = (props) => {
  return (
    <Fragment>
      {props.images.map((img) => (
        <div key={img.id} className={fullGalleryClasses.image}>
          <img
            onClick={props.showFullGalHandler.bind(this, img)}
            src={img.thumb}
            alt={img.alt}
            title="Otevřít obrázek v galerii"
            className={fullGalleryClasses.img}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default Image;
