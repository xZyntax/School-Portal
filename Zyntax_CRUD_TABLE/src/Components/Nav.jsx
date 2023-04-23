import { useState } from "react";
import "../Components/Nav.css";
import logo from "../Components/logo/GJC-logo.png";
import { Link } from "react-router-dom";
function Nav() {
  const [currentState, SetState] = useState(false);
  function handleClick() {
    return SetState((currentState) => !currentState);
  }
  let openToggle = currentState ? "nav-toggle" : "";
  return (
    <header className="nav-head">
      <div className="main-logo">
        <img src={logo}></img>
        <p>General De Jesus College</p>
      </div>
      <nav className={`nav-items ${openToggle}`}>
        <i className="gg-close btn-close" onClick={handleClick}></i>
       <Link to ="/"> <a>Home</a> </Link>
        <a href="#">Logout</a>
        <a href="#" className="account-hover">
          Account
        </a>
      </nav>
      <i className="gg-menu btn-open" onClick={handleClick}></i>
    </header>
  );
}

export default Nav;
