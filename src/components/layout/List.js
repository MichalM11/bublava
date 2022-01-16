import { Element } from "react-scroll";
import listClasses from "./List.module.css";

const List = () => {
  return (
    <section style={{ margin: "10rem 0" }}>
      <Element name="details" />
      <ul className={listClasses.list}>
        <li className={listClasses.item}>Dřevostavba 40 m² ????</li>
        <li className={listClasses.item}>Pozemek 563 m² ????</li>
        <li className={listClasses.item}>Dojezdová vzdálenost do Brna ????</li>
        <li className={listClasses.item}>Výhled na Letovický zámek ????</li>
        <li className={listClasses.item}>Klidná a tichá lokalita ????</li>
      </ul>
    </section>
  );
};

export default List;
