import React from "react";
import styled from "styled-components";
import { Container, Actions, HeroBannerPadding } from "../../layoutComponents";
import { ButtonPrimary, AnchorInline } from "../../buttons";

const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.4);
  // background: url("../../../images/hero.jpg")), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 90vh;
  height: 100%;

  @media screen and(max-width: 36em) {
    min-height: 110vh;
    height: 100%;
  }
`;

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  p {
    color: var(--clr-tan);
  }
`;

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const TextMobile = styled.div`
  display: none;
  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;
export default function Banner({ title, subheader, description, image }) {
  return (
    <div>
      <HeroBannerPadding />
      <BannerGrid>
        <Wrapper img={image.sourceUrl}>
          <Container className="spacing">
            <Text className="spacing">
              <div className="">
                <h1 className="title">{title}</h1>
                <p className="subheader">{subheader}</p>
              </div>
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            </Text>
          </Container>
        </Wrapper>
        <BannerBottomText>
          <Container>
            <p>{description}</p>
          </Container>
        </BannerBottomText>
      </BannerGrid>
      <TextMobile>
        <Container>
          <p>{description}</p>
        </Container>
      </TextMobile>
    </div>
  );
}

// const Banner = ({ title, subheader, description, image }) => {
//   let width = '100%';
//   let height = 'auto';
//   return (
//     <div>
//       <h2>PageComponent Banner</h2>
//       <h3>{title}</h3>
//       <p>{subheader}</p>
//       <p>{description}</p>
//       {image ? (
//         <img width={width} height={height} src={image.sourceUrl} alt={image.altText || ''} srcSet={image.srcSet} />
//       ) : null}
//     </div>
//   );
// };

// export default Banner;
