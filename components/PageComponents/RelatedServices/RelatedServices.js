import React from "react";
import styled from "styled-components";
import { Section, Container, GridAuto } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";

const Wrapper = styled.div`
  padding: 4em 0;
  background: var(--clr-dark);
  @media screen and (max-width: 450px) {
    padding: 4em 0;
  }
`;

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: var(--txt-light);
`;

// const StyledImg = styled(GatsbyImage)`
//   height: 250px;
//   width: 250px;
//   border: 2px solid var(--clr-accent);
//   border-radius: 1000px;
// `

const Item = styled.div`
  text-align: center;
  figure {
    img {
      height: 250px;
      width: 250px;
      object-fit: cover;
      border: 2px solid var(--clr-accent);
      border-radius: 1000px;
    }
  }

  p {
    color: var(--txt-light);
  }
`;

const Inner = styled.div`
  padding: 1em;
  div {
    p {
      a {
        color: var(--txt-light);
      }
    }
  }
`;

const Img = styled.div`
  .imgs {
    border: 2px solid var(--clr-accent);
    border-radius: 1000px;
  }
`;

export default function RelatedServices({ serviceContent }) {
  let width = "250px";
  let height = "250px";
  return (
    <Wrapper>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <h2 className="title">related services</h2>
          </div>
        </Text>
        <GridAuto>
          {serviceContent.map((item,index) => {
            return (
              <Item key={index}>
                <Image
                  alt={item.image.altText || ""}
                  srcSet={item.image.srcSet}
                  src={item.image.src}
                  width={width}
                  height={height}
                />
                <Inner>
                  <h3 className="subheader tan">{item.title}</h3>
                  {item.link ? (
                    <div
                      className="bold"
                      dangerouslySetInnerHTML={{
                        __html: `${item.link}`,
                      }}
                    />
                  ) : null}
                </Inner>
              </Item>
            );
          })}
        </GridAuto>
        <center>
          <ButtonPrimary href="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Wrapper>
  );
}
