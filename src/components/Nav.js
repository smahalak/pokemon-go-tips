import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          PoGo Tricks
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "35%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/tips">Tips & Tricks</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/tips" ? "30%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/addme">Add Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/addme" ? "35%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e71027;
  position: sticky;
  top: 0;
  z-index: 5;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: Pokemon, cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: white;
  width: 0%;
  position: absolute;
  bottom: -20%;
  left: 70%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
