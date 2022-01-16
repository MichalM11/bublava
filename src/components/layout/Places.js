import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBusSimple,
  faGraduationCap,
  faUtensils,
  faEnvelope,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";

import placesClasses from "./Places.module.css";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Places = () => {
  const color = "#fff2e6";
  const size = "6x";

  const places = document.querySelectorAll(`.${placesClasses.place}`);

  const { ref: placesRef, inView: placesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (placesInView) {
      places.forEach((place, i) => {
        setTimeout(() => {
          place.classList = placesClasses.place;
        }, i * 200);
      });
    }
  });

  return (
    <section
      ref={placesRef}
      style={{ margin: "10rem 0" }}
      className={placesClasses.places}
    >
      <Element name="places" className={placesClasses.smooth} />
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faStore} size={size} color={color} />
        <p className={placesClasses.info}>Obchod ???</p>
        <p>311 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faBusSimple} size={size} color={color} />
        <p className={placesClasses.info}>MHD ???</p>
        <p>150 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faGraduationCap} size={size} color={color} />
        <p className={placesClasses.info}>Škola ???</p>
        <p>196 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faUtensils} size={size} color={color} />
        <p className={placesClasses.info}>Restaurace ???</p>
        <p>1013 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faEnvelope} size={size} color={color} />
        <p className={placesClasses.info}>Pošta ???</p>
        <p>237 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faHouseMedical} size={size} color={color} />
        <p className={placesClasses.info}>Lékař ???</p>
        <p>262 m</p>
      </div>
    </section>
  );
};

export default Places;
