import styled from "styled-components";
import { Link } from "react-router-dom";
import beginner from "../img/beginner.jpg";
import intermediate from "../img/intermediate.jpg";
import expert from "../img/expert.jpg";
import { motion } from "framer-motion";
import {
  pageAnimation,
  lineAnimation,
  fade,
  photoAnimation,
  slider,
  slider2,
  sliderContainer,
} from "../animation";

const Tips = () => {
  return (
    <StyledTips
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        {/* <Frame2 variants={slider2}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider2}></Frame4> */}
      </motion.div>

      <StyledSkill>
        <motion.h2 variants={fade}>Beginner</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/tips/beginner">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={beginner}
              alt="starting pokemon"
            />
          </Hide>
        </Link>
      </StyledSkill>
      <StyledSkill>
        <motion.h2 variants={fade}>Intermediate</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/tips/intermediate">
          <img src={intermediate} alt="pokemon in field" />
        </Link>
      </StyledSkill>
      <StyledSkill>
        <motion.h2 variants={fade}>Expert</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/tips/expert">
          <img src={expert} alt="player with 45 phones" />
        </Link>
      </StyledSkill>
    </StyledTips>
  );
};

const StyledTips = styled(motion.div)`
  min-height: 50vh;
  overflow: hidden;
  padding: 1rem 10rem;
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

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
  background-image: url("https://images.launchbox-app.com/b4a76b97-37b9-4b10-a0be-212d3a2114bd.jpg");
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
  background-image: url("https://i.ytimg.com/vi/nBVkl1M44Ns/maxresdefault.jpg");
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
  background-image: url("https://i.ytimg.com/vi/Rjr6jZ1sDYA/maxresdefault.jpg");
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
  background-image: url("https://i.ytimg.com/vi/pDTZnEC8T7I/maxresdefault.jpg");
`;

export default Tips;
