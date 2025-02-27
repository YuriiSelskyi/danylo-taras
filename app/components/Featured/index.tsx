"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

interface DataType {
  imgSrc: string;
}

const postData: DataType[] = [
  {
    imgSrc: "/images/featured/feat1.jpeg",
  },
  {
    imgSrc: "/images/featured/feat2.jpeg",
  },
  {
    imgSrc: "/images/featured/feat3.JPG",
  },
  {
    imgSrc: "/images/featured/feat4.JPG",
  },
  {
    imgSrc: "/images/featured/feat5.JPG",
  },
  {
    imgSrc: "/images/featured/feat6.JPG",
  },
  {
    imgSrc: "/images/featured/feat7.jpeg",
  },
  {
    imgSrc: "/images/featured/feat8.JPG",
  },
];

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 500,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="bg-[#b79f95] marginFeature bg-featured">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center pt-48 pb-10 md:pt-96">
            <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">
              Featured works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">
              Featured works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">
              Featured works.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={636}
                    height={620}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
