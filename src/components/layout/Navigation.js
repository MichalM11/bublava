import { useState } from "react";
import { animateScroll, scroller } from "react-scroll";
import navbarClasses from "./Navigation.module.css";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

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

  const goToGallery = () => {
    scroller.scrollTo("gallery", {
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
            <button onClick={goHomeHandler}>Úvod</button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToDetails}>Detaily</button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToPlaces}>Okolí</button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToDesc}>Popis</button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToGallery}>Galerie</button>
          </li>
          <li className={navbarClasses.item}>
            <button onClick={goToContact}>Kontakt</button>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navigation;
