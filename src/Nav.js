import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    function a() {
      handleShow(window.scrollY > 100);
    }
    window.addEventListener("scroll", a);
    return () => {
      window.removeEventListener("scroll", a);
    };
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXh0FvrmnUFQyDhO-e6lOmUyNs8U04YuwN5UNuxf-eryxwNYFxnwdbubGiE3wHecjXmI&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
