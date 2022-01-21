import img1 from "./assets/bike.jpeg";
import img2 from "./assets/bike2.jpeg";
import img3 from "./assets/foto1.jpg";
import img4 from "./assets/foto2.jpg";
import img5 from "./assets/foto3.jpg";
import img6 from "./assets/foto4.jpg";
import img7 from "./assets/foto5.jpg";
import img8 from "./assets/foto6.jpg";
import img9 from "./assets/foto7.jpg";
import img10 from "./assets/foto8.jpg";
import img11 from "./assets/foto9.jpg";
import img12 from "./assets/foto10.jpg";
import img13 from "./assets/foto11.jpg";
import img14 from "./assets/IMG_0568.jpeg";
import img15 from "./assets/IMG_0615.jpeg";
import img16 from "./assets/IMG_0616.jpeg";
import img17 from "./assets/IMG_0617.jpeg";
import img18 from "./assets/IMG_0628.jpeg";
import img19 from "./assets/img1.png";
import img20 from "./assets/img4.png";
import img21 from "./assets/lanovka.jpeg";
import img22 from "./assets/pudorys.png";
import img23 from "./assets/skiareal.png";
import img24 from "./assets/zasnezovani.jpeg";

import img1Thumb from "./assets/bike_thumb.jpeg";
import img2Thumb from "./assets/bike2_thumb.jpeg";
import img3Thumb from "./assets/foto1_thumb.jpg";
import img4Thumb from "./assets/foto2_thumb.jpg";
import img5Thumb from "./assets/foto3_thumb.jpg";
import img6Thumb from "./assets/foto4_thumb.jpg";
import img7Thumb from "./assets/foto5_thumb.jpg";
import img8Thumb from "./assets/foto6_thumb.jpg";
import img9Thumb from "./assets/foto7_thumb.jpg";
import img10Thumb from "./assets/foto8_thumb.jpg";
import img11Thumb from "./assets/foto9_thumb.jpg";
import img12Thumb from "./assets/foto10_thumb.jpg";
import img13Thumb from "./assets/foto11_thumb.jpg";
import img14Thumb from "./assets/IMG_0568_thumb.jpeg";
import img15Thumb from "./assets/IMG_0615_thumb.jpeg";
import img16Thumb from "./assets/IMG_0616_thumb.jpeg";
import img17Thumb from "./assets/IMG_0617_thumb.jpeg";
import img18Thumb from "./assets/IMG_0628_thumb.jpeg";
import img19Thumb from "./assets/img1_thumb.png";
import img20Thumb from "./assets/img4_thumb.png";
import img21Thumb from "./assets/lanovka_thumb.jpeg";
import img22Thumb from "./assets/pudorys.png";
import img23Thumb from "./assets/skiareal_thumb.png";
import img24Thumb from "./assets/zasnezovani_thumb.jpeg";

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
import { useState, Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import LazyLoad from "react-lazyload";

const images = [
  {
    id: "i1",
    src: img1,
    alt: "Volnočasové aktivity",
    thumb: img1Thumb,
  },
  {
    id: "i2",
    src: img2,
    alt: "Volnočasové aktivity",
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
    alt: "Volnočasové aktivity",
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
    alt: "Volnočasové aktivity",
    thumb: img19Thumb,
  },
  {
    id: "i20",
    src: img20,
    alt: "Volnočasové aktivity",
    thumb: img20Thumb,
  },
  {
    id: "i21",
    src: img21,
    alt: "Pudorys nemovitosti",
    thumb: img21Thumb,
  },
  {
    id: "i22",
    src: img22,
    alt: "Vizualizace nemovitosti",
    thumb: img22Thumb,
  },
  {
    id: "i23",
    src: img23,
    alt: "Vizualizace nemovitosti",
    thumb: img23Thumb,
  },
  {
    id: "i24",
    src: img24,
    alt: "Vizualizace nemovitosti",
    thumb: img24Thumb,
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

      <Suspense fallback={<div>Loading...</div>}>
        <Navigation images={images} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Header hero={img22} appIsLoading={isLoading} />
      </Suspense>

      <section className={appClasses.section}>
        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>

        <Images
          images={images}
          img1={images[8]}
          img2={images[10]}
          img3={images[2]}
        />
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Places />
      </Suspense>

      <section
        className={appClasses.section + " " + appClasses["section--reverse"]}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Paragraphs />
        </Suspense>

        <Images
          images={images}
          img1={images[7]}
          img2={images[12]}
          img3={images[11]}
        />
      </section>

      {/* <FullGallery images={images} /> */}

      <LazyLoad height={400}>
        <MapWrap />
      </LazyLoad>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm background={img13} />
      </Suspense>
    </div>
  );
};

export default App;
