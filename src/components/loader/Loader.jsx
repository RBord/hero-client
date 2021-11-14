import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';

class Spinner extends React.Component {
  render() {
    return (
        <div className={s.Container}>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={0}
            />
      </div>
    );
  }
}
export default Spinner;