import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";

const Text = styled.div``;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: 20px 20px 0px 1px var(--clr-accent);
// `

const Img = styled.div`
  position: relative;
  figure {
    div {
      box-shadow: 20px 20px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 10px;
`;
const Buttonwrapper = styled.div`
  display: flex;
  height: 50px;
`;

export default function ImageRight({
  subheader,
  title,
  body,
  image,
  button,
  showarrow = false,
  link,
  imageCopy,
}) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              ></div>
            ) : null}

            {button && link ? (
              <ButtonPrimary href={link}>{button}</ButtonPrimary>
            ) : showarrow ? (
              <Buttonwrapper>
                <ButtonPrimary href="/calgary-landscaping-materials">
                  discover Products
                </ButtonPrimary>
                <img
                  width="160px"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-62.png"
                />
              </Buttonwrapper>
            ) : (
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            )}
          </Text>

          <Img>
            {imageCopy ? (
              <LogoWrapper>
                <img height="130px" width="130px" src={imageCopy.sourceUrl} />
              </LogoWrapper>
            ) : null}
            <Image
              className="stretch"
              alt={image.altText || ""}
              srcSet={image.sourceUrl}
            />
          </Img>
        </Flex>
      </Container>
    </Section>
  );
}
