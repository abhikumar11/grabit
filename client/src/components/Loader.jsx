import { BarLoader, ClipLoader, RingLoader } from "react-spinners";
import "./styles/loader.css";
const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="loader-overlay">
      <BarLoader size={80} color="#007bff"  height={6} width={200} speedMultiplier={1}/>
      <p>{message}</p>
    </div>
  );
};
export default Loader;