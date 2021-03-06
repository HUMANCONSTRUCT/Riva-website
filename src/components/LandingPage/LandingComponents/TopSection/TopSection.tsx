import React from "react";
import styled from "styled-components";
import bayView2 from "../../../../images/heroImage003.png";

const HomePage = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        <img src={bayView2} alt="Redifing Waterfront Dining" />
      </AboutContainerInner>
    </AboutContainer>
  );
};
export default HomePage;

const AboutContainer = styled.header`
  width: 100%;
  height: 100%;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 580px) {
    padding-top: 200px;
  }
`;
const AboutContainerInner = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;
