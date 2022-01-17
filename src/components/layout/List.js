import { Element } from "react-scroll";
import listClasses from "./List.module.css";

const List = () => {
  return (
    <section style={{ margin: "10rem 0" }}>
      <Element name="details" />
      <ul className={listClasses.list}>
        <li className={listClasses.item}>Vila 445 m²</li>
        <li className={listClasses.item}>Pozemek 2 358 m²</li>
        <li className={listClasses.item}>4 podlaží, 1 podzemní podlaží</li>
        <li className={listClasses.item}>Cihlová konstrukce budovy</li>
        <li className={listClasses.item}>Turisticky vyhledávaná oblast</li>
      </ul>
    </section>
  );
};

export default List;
