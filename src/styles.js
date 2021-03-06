import styled from "styled-components";
import { motion } from "framer-motion";

//styled components
export const About = styled(motion.div)`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
    border-radius: 2%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
