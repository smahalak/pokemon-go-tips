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
        <Toggle title="Another clever fact">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quia.
            </p>
          </div>
        </Toggle>
        <Toggle title="Yes more facts please">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quia.
            </p>
          </div>
        </Toggle>
        <Toggle title="The last clever fact">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quia.
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
