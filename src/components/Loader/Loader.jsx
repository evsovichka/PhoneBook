import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="rgba(164, 56, 123, 0.87)"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: "center" }}
      wrapperClass=""
    />
  );
}
