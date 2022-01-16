import img1 from "./assets/bike.jpeg";
import img2 from "./assets/bike2.jpeg";
import img3 from "./assets/IMG_0568.jpeg";
import img4 from "./assets/IMG_0615.jpeg";
import img5 from "./assets/IMG_0616.jpeg";
import img6 from "./assets/IMG_0617.jpeg";
import img7 from "./assets/IMG_0628.jpeg";
import img8 from "./assets/lanovka.jpeg";
import img9 from "./assets/img1.png";
import img10 from "./assets/img2.png";
import img11 from "./assets/img3.png";
import img12 from "./assets/img4.png";
import img13 from "./assets/img5.png";
import img14 from "./assets/img6.png";
import img15 from "./assets/img7.png";
import img16 from "./assets/img8.png";
import img17 from "./assets/img9.png";
import img18 from "./assets/img10.png";
import img19 from "./assets/skiareal.png";
import img20 from "./assets/zasnezovani.jpeg";

import img1Thumb from "./assets/bike_thumb.jpeg";
import img2Thumb from "./assets/bike2_thumb.jpeg";
import img3Thumb from "./assets/IMG_0568_thumb.jpeg";
import img4Thumb from "./assets/IMG_0615_thumb.jpeg";
import img5Thumb from "./assets/IMG_0616_thumb.jpeg";
import img6Thumb from "./assets/IMG_0617_thumb.jpeg";
import img7Thumb from "./assets/IMG_0628_thumb.jpeg";
import img8Thumb from "./assets/lanovka_thumb.jpeg";
import img9Thumb from "./assets/img1_thumb.png";
import img10Thumb from "./assets/img2_thumb.png";
import img11Thumb from "./assets/img3_thumb.png";
import img12Thumb from "./assets/img4_thumb.png";
import img13Thumb from "./assets/img5_thumb.png";
import img14Thumb from "./assets/img6_thumb.png";
import img15Thumb from "./assets/img7_thumb.png";
import img16Thumb from "./assets/img8_thumb.png";
import img17Thumb from "./assets/img9_thumb.png";
import img18Thumb from "./assets/img10_thumb.png";
import img19Thumb from "./assets/skiareal_thumb.png";
import img20Thumb from "./assets/zasnezovani_thumb.jpeg";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import List from "./components/layout/List";
import Images from "./components/layout/Images";
import Paragraphs from "./components/layout/Paragraphs";
import ContactForm from "./components/forms/ContactForm";
import Places from "./components/layout/Places";
import MapWrap from "./components/layout/MapWrap";

import appClasses from "./App.module.css";
// import FullGallery from "./components/layout/FullGallery";
import { useState } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import LazyLoad from "react-lazyload";

const images = [
  {
    id: "i1",
    src: img1,
    alt: "Obrázek nemovitosti",
    thumb: img1Thumb,
  },
  {
    id: "i2",
    src: img2,
    alt: "Obrázek nemovitosti",
    thumb: img2Thumb,
  },
  {
    id: "i3",
    src: img3,
    alt: "Obrázek nemovitosti",
    thumb: img3Thumb,
  },
  {
    id: "i4",
    src: img4,
    alt: "Obrázek nemovitosti",
    thumb: img4Thumb,
  },
  {
    id: "i5",
    src: img5,
    alt: "Obrázek nemovitosti",
    thumb: img5Thumb,
  },
  {
    id: "i6",
    src: img6,
    alt: "Obrázek nemovitosti",
    thumb: img6Thumb,
  },
  {
    id: "i7",
    src: img7,
    alt: "Obrázek nemovitosti",
    thumb: img7Thumb,
  },
  {
    id: "i8",
    src: img8,
    alt: "Obrázek nemovitosti",
    thumb: img8Thumb,
  },
  {
    id: "i9",
    src: img9,
    alt: "Obrázek nemovitosti",
    thumb: img9Thumb,
  },
  {
    id: "i10",
    src: img10,
    alt: "Obrázek nemovitosti",
    thumb: img10Thumb,
  },
  {
    id: "i11",
    src: img11,
    alt: "Obrázek nemovitosti",
    thumb: img11Thumb,
  },
  {
    id: "i12",
    src: img12,
    alt: "Obrázek nemovitosti",
    thumb: img12Thumb,
  },
  {
    id: "i13",
    src: img13,
    alt: "Obrázek nemovitosti",
    thumb: img13Thumb,
  },
  {
    id: "i14",
    src: img14,
    alt: "Obrázek nemovitosti",
    thumb: img14Thumb,
  },
  {
    id: "i15",
    src: img15,
    alt: "Obrázek nemovitosti",
    thumb: img15Thumb,
  },
  {
    id: "i16",
    src: img16,
    alt: "Obrázek nemovitosti",
    thumb: img16Thumb,
  },
  {
    id: "i17",
    src: img17,
    alt: "Obrázek nemovitosti",
    thumb: img17Thumb,
  },
  {
    id: "i18",
    src: img18,
    alt: "Obrázek nemovitosti",
    thumb: img18Thumb,
  },
  {
    id: "i19",
    src: img19,
    alt: "Obrázek nemovitosti",
    thumb: img19Thumb,
  },
  {
    id: "i20",
    src: img20,
    alt: "Obrázek nemovitosti",
    thumb: img20Thumb,
  },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <div className={appClasses.app} onLoad={handleLoad}>
      {isLoading && (
        <div className={appClasses.loading}>
          <LoadingSpinner width="80px" height="80px" />
        </div>
      )}

      <Navigation />

      <Header hero={img5} appIsLoading={isLoading} />

      <section className={appClasses.section}>
        <List />

        <Images
          images={images}
          img1={images[10]}
          img2={images[12]}
          img3={images[2]}
        />
      </section>

      <Places />

      <section
        className={appClasses.section + " " + appClasses["section--reverse"]}
      >
        <Paragraphs />

        <Images
          images={images}
          img1={images[13]}
          img2={images[15]}
          // img3={images[11]}
        />
      </section>

      {/* <FullGallery images={images} /> */}

      <LazyLoad height={400}>
        <MapWrap />
      </LazyLoad>

      <ContactForm background={img10} />
    </div>
  );
};

export default App;
