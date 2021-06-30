import styled from "styled-components";

//styled components
export const About = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 10rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
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
