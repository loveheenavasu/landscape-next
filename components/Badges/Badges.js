import React from "react";
import { Container, Section } from "components/layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";
import styles from "./Badges.module.scss";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "100px",
  width: "100%",
  padding: "2em",
};

export default function Badges() {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <div className={styles.wrapper}>
      <section>
        <div className="spacing">
          <div className="container">
            <h2 className="title center">
              top rated calgary landscaping company
            </h2>
          </div>
          <Slider className={styles.slider} {...settings}>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/best-landscaping-companies-in-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/best-landscaping-companies-in-calgary-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-experts-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-experts-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-experts-calgary-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-4.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-5.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-6.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-7.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-8.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-9.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-10.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-11.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </Slider>
          <div className={styles.grid}>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/best-landscaping-companies-in-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />

            <Image
              src="/badges/landscaping-calgary-top-rated-experts-9.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-11.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
