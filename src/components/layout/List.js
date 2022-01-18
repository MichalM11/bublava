import { Trans, useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import listClasses from "./List.module.css";

const List = () => {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <section style={{ margin: "10rem 0" }}>
      <Element name="details" />
      <ul className={listClasses.list}>
        <li className={listClasses.item}>
          <Trans i18nKey="list.item1">Vila 445 m²</Trans>
        </li>
        <li className={listClasses.item}>
          <Trans i18nKey="list.item2">Pozemek 2 358 m²</Trans>
        </li>
        <li className={listClasses.item}>
          <Trans i18nKey="list.item3">4 podlaží, 1 podzemní podlaží</Trans>
        </li>
        <li className={listClasses.item}>
          <Trans i18nKey="list.item4">Cihlová konstrukce budovy</Trans>
        </li>
        <li className={listClasses.item}>
          <Trans i18nKey="list.item5">Turisticky vyhledávaná oblast</Trans>
        </li>
      </ul>
    </section>
  );
};

export default List;
