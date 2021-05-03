import React from "react";
import TopSection from "./LandingComponents/TopSection/TopSection";
import FromConcept from "./LandingComponents/FromConcept/FromConcept";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <TopSection />
      <Footer />
    </Wrapper>
  );
};

const red = `#B96140`;
const blue = `#00A79D`;
const black = `#000000`;
const white = `#FFFFFF`;
const Wrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  max-width: 100%;
`;

export default LandingPage;