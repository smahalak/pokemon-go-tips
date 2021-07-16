import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { Image } from "../styles";
import qr from "../img/qr.jpg";
import referral_code from "../img/referral_code.jpg";
import trainercode from "../img/trainercode.jpg";

const AddMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Add me component
      <button>
        <a
          href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en&gl=us"
          target="_blank"
        >
          Download Link
        </a>
      </button>
      <img src={trainercode} alt="pokemon yo" />
    </motion.div>
  );
};

export default AddMe;
