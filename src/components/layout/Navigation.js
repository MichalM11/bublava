import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { animateScroll, scroller } from "react-scroll";
import GalleryModal from "../UI/GalleryModal";
import navbarClasses from "./Navigation.module.css";

const Navigation = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [locale, setLocale] = useState("cs");
  const [showGallery, setShowGallery] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  const showFullGalHandler = () => {
    setShowGallery(true);
    setShowNav(false);
  };

  const closeFullGalleryHandler = () => {
    setShowGallery(false);
  };

  useEffect(() => {
    if (navigator.language.split("-")[0] === "de") {
      setLocale("de");
      i18n.changeLanguage("de");
    }

    i18n.changeLanguage("cs");
  }, [i18n]);

  const goHomeHandler = () => {
    animateScroll.scrollToTop({ duration: 1000, smooth: true });

    setShowNav(false);
  };

  const goToDetails = () => {
    scroller.scrollTo("details", {
      duration: 1000,
      smooth: true,
      offset: -200,
    });

    setShowNav(false);
  };

  const goToDesc = () => {
    scroller.scrollTo("desc", {
      duration: 1000,
      smooth: true,
      offset: -100,
    });

    setShowNav(false);
  };

  const goToPlaces = () => {
    scroller.scrollTo("places", {
      duration: 1000,
      smooth: true,
      offset: -100,
    });

    setShowNav(false);
  };

  const goToContact = () => {
    scroller.scrollTo("profile", {
      duration: 1000,
      smooth: true,
      offset: -100,
    });

    setShowNav(false);
  };

  const toglleNavHandler = () => {
    setShowNav(!showNav);
  };

  const onLangChangeHandler = (e) => {
    i18n.changeLanguage(e.target.value);
    setShowNav(false);
  };

  const navClasses = !showNav
    ? `${navbarClasses.nav}`
    : `${navbarClasses.nav} ${navbarClasses["show-nav"]}`;

  const hamClasses = !showNav
    ? `${navbarClasses.hamburger}`
    : `${navbarClasses.hamburger} ${navbarClasses.cross}`;

  return (
    <nav className={navbarClasses.navbar}>
      <div className={hamClasses} onClick={toglleNavHandler}>
        <div className={navbarClasses["hamburger-line"]}></div>
      </div>
      <nav className={navClasses}>
        <ul className={navbarClasses.list}>
          <li className={navbarClasses.item}>
            <button onClick={goHomeHandler}>
              <Trans i18nKey="menu.item1">??vod</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToDetails}>
              <Trans i18nKey="menu.item2">Detaily</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToPlaces}>
              <Trans i18nKey="menu.item3">Okol??</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToDesc}>
              <Trans i18nKey="menu.item4">Popis</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={showFullGalHandler}>
              <Trans i18nKey="menu.item5">Galerie</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToContact}>
              <Trans i18nKey="menu.item6">Kontakt</Trans>
            </button>
          </li>
          <li className={navbarClasses.item}>
            <select onChange={onLangChangeHandler}>
              <option value="cs" selected={locale === "cs"}>
                CZ
              </option>
              <option value="de" selected={locale === "de"}>
                DE
              </option>
            </select>
          </li>
        </ul>
      </nav>
      {showGallery && (
        <GalleryModal
          images={props.images}
          onClose={closeFullGalleryHandler}
          curImage={props.images[0]}
        />
      )}
    </nav>
  );
};

export default Navigation;
