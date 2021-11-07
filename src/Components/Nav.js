import React, { useEffect, useState } from "react";
import "../Components/Nav.css";

function Nav() {
  const [show, setshow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`container ${show && "nav-apply"}`}>
        <img
          className="navlogo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="nav logo"
        />
        <a href="#">
          <img
            className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar logo"
          />
        </a>
      </div>
    </>
  );
}

export default Nav;
