import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ width, height }) => {
  return (
    <div className={classes["lds-grid"]} style={{ width, height }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
