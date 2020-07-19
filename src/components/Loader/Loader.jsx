import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import style from "./Loader.module.css";

const Loader1 = () => (
  <Loader
    type="Puff"
    color="#00000"
    height={50}
    width={500}
    timeout={1000}
    className={style.Loader}
  />
);

export default Loader1;
