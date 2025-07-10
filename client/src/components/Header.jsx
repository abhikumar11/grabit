import logo from '../assets/logo.png';
import "./styles/header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="logo"/>
      </div>
      <div className="middle-section">
        <div className="location"></div>
        <div className="search-form"></div>
      </div>
      <div className="right-section">
        <button>Login</button>
        <button>Cart</button>
      </div>
    </div>
  )
}

export default Header