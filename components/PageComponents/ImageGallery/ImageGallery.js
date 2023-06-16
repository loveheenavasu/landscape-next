import React from "react";
import styled from "styled-components";
import { Section } from "components/layoutComponents";
import Image from "components/Image";

const Wrapper = styled.div``;

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 2em;

  figure {
    div {
      img {
        object-fit: cover;
        border-radius: 10000px;
        border: 2px solid var(--clr-accent);
        width: 250px;
        height: 250px;
      }
    }
  }
`;

export default function ImageGallery({ subheader, title, body, imageGallery }) {
  let width = "250px";
  let height = "250px";
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
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
              />
            ) : null}
          </Text>
          <center>
            <Grid>
              {imageGallery.map((image) => {
                return (
                  <Image
                    alt={image.altText || ""}
                    srcSet={image.srcSet}
                    src={image.src}
                    width={width}
                    height={height}
                  />
                );
              })}
            </Grid>
          </center>
        </Container>
      </Section>
    </Wrapper>
  );
}
