import { TailSpin } from "react-loader-spinner";
function Loader() {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#3b5bdb"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loader;
