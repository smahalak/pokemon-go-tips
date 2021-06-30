import phone from "../img/phone.jpg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <div className="services">
      <Description></Description>
      <Image>
        <img alt="download screen" src={phone} />
      </Image>
    </div>
  );
};

export default ServicesSection;
