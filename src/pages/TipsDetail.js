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
          <h2>{skill.title}</h2>
          <img src={skill.mainImg} alt="skill" />
        </div>
      )}
    </>
  );
};

export default TipsDetail;
