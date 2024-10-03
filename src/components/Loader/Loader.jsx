import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loaderWrap}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#c67c4e"
        style={{
          position: "absolute",
        }}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClass=""
      />
    </div>
  );
}
