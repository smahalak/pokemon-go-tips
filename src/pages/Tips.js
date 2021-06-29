import styled from "styled-components";
import { Link } from "react-router-dom";
import beginner from "../img/beginner.jpg";
import intermediate from "../img/intermediate.jpg";
import expert from "../img/expert.jpg";

const Tips = () => {
  return (
    <StyledTips>
      <StyledSkill>
        <h2>Beginner</h2>
        <div className="line"></div>
        <Link>
          <img src={beginner} alt="starting pokemon" />
        </Link>
      </StyledSkill>
      <StyledSkill>
        <h2>Intermediate</h2>
        <div className="line"></div>
        <Link>
          <img src={intermediate} alt="starting pokemon" />
        </Link>
      </StyledSkill>
      <StyledSkill>
        <h2>Expert</h2>
        <div className="line"></div>
        <Link>
          <img src={expert} alt="starting pokemon" />
        </Link>
      </StyledSkill>
    </StyledTips>
  );
};

const StyledTips = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const StyledSkill = styled.div`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #e71027;
    border-radius: 2%;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    border-radius: 1%;
    object-fit: cover;
  }
`;

export default Tips;
