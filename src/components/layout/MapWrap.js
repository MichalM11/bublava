import LeafletMap from "../map/LeafletMap";

import classes from "./MapWrap.module.css";

const MapWrap = () => {
  return (
    <section className={classes.mapwrap}>
      <LeafletMap />
    </section>
  );
};

export default MapWrap;
