import logo from "../assets/logo.png";
import "./styles/header.css";
import { FaUserCircle } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
     return (
          <div className="header-container">
               <div className="header-left-section">
                    <img src={logo} alt="logo" />
               </div>
               <div className="header-middle-section">
                    <div className="header-location"></div>
                    <div className="header-search-form"></div>
               </div>
               <div className="header-right-section">
                    <button className="header-button"><FaUserCircle fontSize={"20px"}/>Login</button>
                    <button className="header-button"><CiShoppingCart fontSize={"20px"}/>Cart</button>
               </div>
          </div>
     );
};

export default Header;
