import styled from "styled-components";
import { About } from "../styles";
import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFacts
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Some neat <span>FACTS</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Bonus Stardust">
          <div className="answer">
            <p>
              The following pokemon will give you bonus startdust after catching
              them.
            </p>
            <p>
              Paras, Parasect, Meowth, Persian, Meowth (Alolan), Persian
              (Alolan), Shellder, Cloyster, Staryu, Starmie, Delibird,
              Shroomish, Breloom, Sableye, Chimecho, Combee, Vespiquen, Audino,
              Trubbish, Garbodor, Foongus, and Amoonguss.
            </p>
          </div>
        </Toggle>
        <Toggle title="Prevent GO Battle Lag">
          <div className="answer">
            <p>Aside from having a strong internet connection</p>
            <p>Turn off your device's GPS to free up some processing power.</p>
          </div>
        </Toggle>
        <Toggle title="Guranteed XL Candy">
          <div className="answer">
            <p>Must be level 40*</p>
            <p>
              Catch a tier 2 evolution to get a 1 guranteed XL and get 2 XL
              candies for a tier 3. Ex: Charmeleon = 1XL Charizard = 2XL
              candies.
            </p>
          </div>
        </Toggle>
        <Toggle title="Legendary encounters without having to Raid?">
          <div className="answer">
            <p>You must first hit rank 20 in GO battle league</p>
            <p>
              You must win at least 3/5 battles. After that third win you are
              then able to have a 1/15 chance of encountering the currently
              released legendary pokemon.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFacts>
  );
};

const StyledFacts = styled(About)`
  display: block;

  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
