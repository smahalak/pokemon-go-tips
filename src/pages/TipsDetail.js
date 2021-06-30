import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TipsData } from "../tipsData";
import { useEffect, useState } from "react";

const TipsDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [skills, setSkills] = useState(TipsData);
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const currentSkill = skills.filter((stateSkill) => stateSkill.url === url);
    setSkill(currentSkill[0]);
  }, [skills, url]);

  return (
    <>
      {skill && (
        <div>
          <StyledHeader>
            <h2>{skill.title}</h2>
            <img src={skill.mainImg} alt="skill" />
          </StyledHeader>
          <Tips>
            {skill.tips.map((tip) => (
              <Tip
                title={tip.title}
                description={tip.description}
                key={tip.title}
              />
            ))}
          </Tips>
          <ImageDisplay>
            <img src={skill.secondaryImg} alt="pokemon" />
          </ImageDisplay>
        </div>
      )}
    </>
  );
};

const StyledHeader = styled.div`
  min-height: 60vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    font-size: 4rem;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Tips = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const TipStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #e71027;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const Tip = ({ title, description }) => {
  return (
    <TipStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </TipStyle>
  );
};

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default TipsDetail;
