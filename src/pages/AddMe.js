import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
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
    </motion.div>
  );
};

export default AddMe;
