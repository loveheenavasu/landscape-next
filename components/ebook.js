import React from "react";
import styled from "styled-components";
import { AnchorSecondary } from "./buttons";
import { Container, Section } from "./layoutComponents";
import Image from "next/image";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2em auto 4em auto;
  grid-template-rows: 4em auto 4em;
`;

const Img = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  z-index: 2;

  img {
    // height: 450px;
    // width: 100%;
    object-fit: cover;
  }
`;

const Bg = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-accent);
  border-radius: var(--br);
`;

const Text = styled.div`
  grid-row: 2 / -1;
  grid-column: 4 / -1;
  z-index: 2;
  align-self: center;
  color: var(--txt-light);
`;

export default function Ebook(props) {
  return (
    <Section>
      <Container>
        <Grid>
          <Img>
            <Image
              src="/calgary-landscaping-contractor-ebook.png"
              alt="calgary landscaping advice"
              className="img"
              width={400}
              height={400}
            />
          </Img>
          <Bg />
          <Text className="spacing ">
            <h2 className="title">{props.title}</h2>
            <AnchorSecondary href={props.href} target="_blank">
              request free download
            </AnchorSecondary>
          </Text>
        </Grid>
      </Container>
    </Section>
  );
}
