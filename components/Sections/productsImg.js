import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonInline } from "../buttons";
import { Container, Flex, Section } from "../layoutComponents";
import Image from "next/image";

const Text = styled.div``;

const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
  maxHeight: "450px",
};
const Buttonwrapper = styled.div`
  display: flex;
  height: 50px;
`;

export default function ProductsImg(props) {
  return (
    <section>
      <div className="container">
        <div className="flex">
          <Text className="spacing">
            <div>
              <h2 className="title">
                get the highest quality calgary landscaping materials
              </h2>
            </div>
            <p>
              As local trend setters in landscaping and outdoor living, we're
              dedicated to using only the finest materials in our projects. Our
              goal is to create a visually stunning and valuable addition to
              your home. Dive into the world of exceptional landscape products
              with us and step beyond the ordinary into a realm of extraordinary
              design possibilities. From elegant paving stones to
              low-maintenance decking materials, and landscape lighting options
              to create a wow factor, we offer a plethora of choices. Find your
              unique style effortlessly with our user-friendly online material
              selection guide, and start crafting the outdoor oasis of your
              dreams today!
            </p>

            <Buttonwrapper>
              <ButtonPrimary href="/calgary-landscaping-materials">
                discover products
              </ButtonPrimary>
              <img
                width="160px"
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-62.png"
              />
            </Buttonwrapper>
          </Text>
          <Image
            height={100}
            width={400}
            style={ImgStyle}
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659915/calgary-landscaping-selection-guide-1_g3knih.jpg"
            alt="calgary landscaping materials"
          />
        </div>
      </div>
    </section>
  );
}
