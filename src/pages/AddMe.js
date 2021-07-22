import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { Image } from "../styles";
import qr from "../img/qr.jpg";
import referral_code from "../img/referral_code.jpg";
import trainercode from "../img/trainercode.jpg";

const AddMe = () => {
  return (
    <AddMeStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Add me, lets battle!</h2>

      <img src={trainercode} alt="pokemon yo" />
      <img src={referral_code} alt="referral code" />
    </AddMeStyle>
  );
};

const AddMeStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 10rem;
  min-height: 90vh;

  img {
    width: 50%;
    height: 45vh;
    border-radius: 2%;
    object-fit: cover;
    margin: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem;

    h2 {
      font-size: 2rem;
    }
    img {
      object-fit:scale-down;
    }
   
  
  }


  }
`;

export default AddMe;
