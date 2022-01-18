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
import { Trans, useTranslation } from "react-i18next";

const Places = () => {
  const color = "#fff2e6";
  const size = "6x";

  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

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
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item1">Obchod</Trans>
        </p>
        <p>1278 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faBusSimple} size={size} color={color} />
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item2">Bus</Trans>
        </p>
        <p>17 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faGraduationCap} size={size} color={color} />
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item3">Škola</Trans>
        </p>
        <p>2607 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faUtensils} size={size} color={color} />
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item4">Restaurace</Trans>
        </p>
        <p>985 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faEnvelope} size={size} color={color} />
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item5">Pošta</Trans>
        </p>
        <p>1278 m</p>
      </div>
      <div className={placesClasses.place + " " + placesClasses.slider}>
        <FontAwesomeIcon icon={faHouseMedical} size={size} color={color} />
        <p className={placesClasses.info}>
          <Trans i18nKey="places.item6">Lékař</Trans>
        </p>
        <p>3508 m</p>
      </div>
    </section>
  );
};

export default Places;
