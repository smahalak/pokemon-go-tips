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
      <h2>You don't play GO?</h2>
      <button>
        <a
          href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en&gl=us"
          target="_blank"
        >
          Download Link
        </a>
      </button>
      <TrainerInfo>
        <img src={trainercode} alt="pokemon yo" />
        <img src={referral_code} alt="referral code" />
      </TrainerInfo>
    </AddMeStyle>
  );
};

const AddMeStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
`;

const TrainerInfo = styled(motion.div)`
  img {
    width: 50%;
    height: 45vh;
    border-radius: 1%;
    object-fit: cover;
  }
`;

export default AddMe;
