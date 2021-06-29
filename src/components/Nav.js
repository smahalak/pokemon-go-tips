import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/tips">Tips & Tricks</Link>
        </li>
        <li>
          <Link to="/addme">Add Me</Link>
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

export default Nav;
