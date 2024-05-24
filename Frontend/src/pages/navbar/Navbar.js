import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link } from "react-scroll";
import "../../App.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsSticky(false); 
      } else if (currentScrollY > lastScrollY) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar" style={{ position: isSticky ? 'sticky' : 'absolute', top: 0 }}>
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <nav>
        <ul className="navul">
          <li>
            <RouterLink to="/" activeClassName="active">Home</RouterLink> {/* Use RouterLink here */}
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
            >
              Project
            </Link>
          </li>
          <li>
            <RouterLink to="/signin">Sign In</RouterLink>{" "}
            {/* Use RouterLink here */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
