import { Trans, useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import paragraphClasses from "./Paragraphs.module.css";

const Paragraphs = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <section className={paragraphClasses.wrap}>
      <Element name="desc" />

      <p className={paragraphClasses.paragraph}>
        <Trans i18nKey="text.paragraph1">
          Dovolujeme si vám představit skutečně rozsáhlou vilu v srdci
          turisticky vyhledávané obce Bublava v Krušných horách. Po modernizaci
          a převážně povrchové rekonstrukci získá majitel k dispozici funkční
          komplex o 5 velkoryse koncipovaných bytech (3 x 3+kk, 2x 4+kk) s
          technickými místnostmi, parkovištěm a velkou zahradou, na kterou
          sjedete přímo ze ski areálu se čtyřsedačkovou lanovkou.
        </Trans>
      </p>

      <p className={paragraphClasses.paragraph}>
        <Trans i18nKey="text.paragraph2">
          Vila svými dispozicemi a umístěním nabízí kromě vícegeneračního
          bydlení nebo víkendového sídla také velmi zajímavou investiční
          příležitost. Apartmány v obci Bublava jsou totiž pravidelně zaplňovány
          jak v zimních, tak letních měsících a to nejen českými, ale díky
          blízkosti německých hranic (Klingenthal) také německými turisty.
          Atraktivita v zimě je dána moderním lyžařským střediskem se širokým
          spektrem uměle zasněžovaných sjezdových tratí, dětským parkem,
          nedalekým skokanským můstkem nebo více než 100 km upravovaných
          běžeckých tratí. V létě si příjdou na své milovníci procházek či
          obdivovatelé krásné přírody, kterou Krušné hory nabízí. Cyklisti
          najdou vyžití v místím Trail parku, rodiny s dětmi v nedaleké Zoo.
        </Trans>
      </p>
      <p className={paragraphClasses.paragraph}>
        <Trans i18nKey="text.paragraph3">
          Nemovitost se skládá z přízemí, nadzemního podlaží a půdy. Nemovitost
          je podsklepená s početnými a rozsáhlými technickými místnostmi. V
          přízemí se nachází 7 místností. Jeden samostatný apartmán 3kk, přičemž
          druhý samostatný apartmán 4KK vznikne spojením 2kk s přípravou na
          kuchyň a dvou separátních pokojů. Obdobná situace je v nadzemním
          podlaží - jeden samostatný apartmán 3kk a druhý apartmán 4kk vznikne
          propojením a oddělením vstupu do půdního bytu. Půdní byt je ve stavu
          nedokončené ambiciózní rekonstrukce, po jejímž dokončení vznikne
          rozsáhlé 3KK s velkým obývacím pokojem a koupelnou. Zahrada se svým
          velkorysým prostorem vybízí ke zbudování bazénu, dětského hřiště a
          rekonstrukci altánku k příjemnému posezení u venkovního ohně.
        </Trans>
      </p>
      <p className={paragraphClasses.paragraph}>
        <Trans i18nKey="text.paragraph4">
          V případě zájmu vřele doporučujeme prohlídku nemovitosti a jeho okolí
          – jen tak je možné pochopit potenciál, který v sobě vila skrývá.
        </Trans>
      </p>
    </section>
  );
};

export default Paragraphs;
