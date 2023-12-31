import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/07/image-3.png");
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 50px 0px;
  background-size: cover;
  position: relative;
`;
const OverlayBox = styled.div`
  background-color: #004271;
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: block;
  margin: auto;
  z-index: 1;
`;
const ThinBanner = ({ title }) => {
  return (
    <BackgroundWrapper>
      <h1
        style={{
          zIndex: 2,
          position: "relative",
          width: "75%",
          margin: "0 auto",
        }}
      >
        {title}
      </h1>
      <OverlayBox />
    </BackgroundWrapper>
  );
};

export default ThinBanner;
