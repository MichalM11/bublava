import headerClasses from "./Header.module.css";

import { useTranslation, Trans } from "react-i18next";

import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Header = (props) => {
  const { ref: btnRef, inView: btnInView } = useInView({
    triggerOnce: true,
  });
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
  });

  const { t, i18n } = useTranslation();

  const btnClickHandler = () => {
    scroller.scrollTo("profile", {
      duration: 1000,
      smooth: true,
      offset: -100,
    });
  };

  const btnClasses = btnInView
    ? headerClasses.btn
    : headerClasses.btn + " " + headerClasses.sliderBtn;

  return (
    <header className={headerClasses.header}>
      <div className={headerClasses.hero}></div>
      {!props.appIsLoading && (
        <div ref={infoRef} className={headerClasses.info}>
          <h1 className={headerClasses.small}>
            <Trans i18nKey="header.title">PRODEJ VILY 445 m2</Trans>
          </h1>
          <p className={headerClasses.large}>
            <Trans i18nKey="header.price">Cena:</Trans>
            <span>8 490 000 Kč</span>
          </p>
          <p className={headerClasses.small}>
            <Trans i18nKey="header.location">Bublava, Krušné Hory</Trans>
          </p>
        </div>
      )}
      {!props.appIsLoading && (
        <button ref={btnRef} onClick={btnClickHandler} className={btnClasses}>
          <Trans i18nKey="header.button">Sjednat Prohlídku</Trans>
        </button>
      )}
    </header>
  );
};

export default Header;
