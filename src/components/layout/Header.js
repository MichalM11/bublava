import headerClasses from "./Header.module.css";

import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Header = (props) => {
  const { ref: btnRef, inView: btnInView } = useInView({
    triggerOnce: true,
  });
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
  });

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
          <h1 className={headerClasses.small}>PRODEJ VILY ???</h1>
          <p className={headerClasses.large}>
            Cena: <span>????</span>
          </p>
          <p className={headerClasses.small}>adresa</p>
        </div>
      )}
      {!props.appIsLoading && (
        <button ref={btnRef} onClick={btnClickHandler} className={btnClasses}>
          Sjednat Prohlídku
        </button>
      )}
    </header>
  );
};

export default Header;
