import GoogleMap from "../map/GoogleMap";

import classes from "./MapWrap.module.css";

const MapWrap = () => {
  return (
    <section className={classes.mapwrap}>
      <GoogleMap />
    </section>
  );
};

export default MapWrap;
