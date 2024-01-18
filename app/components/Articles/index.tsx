"use client";
import Image from "next/image";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";

interface DataType {
  heading: string;
  date: string;
  imgSrc: string;
  name: Array<string>;
  video: string;
}

const postData: DataType[] = [
  {
    heading: "Roofing Contractor",
    name: [
      "Attic venting",
      "Attic venting installation",
      "Attic venting repairs",
      "Gutter installation",
      "Gutter repairs",
      "Roof damage repair",
      "Roof inspection",
      "Roof installation",
      "Roof repair",
      "Roof repair for storm & wind damage",
      "Skylight installation",
      "Skylight repair",
    ],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
    video:
      "https://drive.google.com/file/d/1WEtSXFBbXznmfPkPaTwFk0bmMjXEkVwt/view?usp=sharing",
  },
  {
    heading: "Construction Company",
    name: [
      "Bathroom remodeling",
      "Building construction",
      "Custom home building",
      "Exterior structural repairs",
      "Foundation installation",
      "Home addition construction",
      "Home building",
      "Home renovations",
      "Kitchen remodeling",
      "New building construction",
      "Remodeling",
      "Water & moisture control services",
      "Commercial Building",
      "Commercial Roofers",
      "Commercial Roofing Systems",
      "Energy Efficiency Upgrade",
      "Financial Plan",
      "Flat Roofing",
      "Free Estimate",
      "Home Financing",
      "Home Improvement Services",
      "Leaf Guards",
      "Move Walls",
      "Our Remodeling Services",
      "Rain Gutters",
      "Remodel Your Home",
      "Remodeling Financing",
      "Remodeling Projects",
      "Residential & Commercial Roofing",
      "Residential And Commercial",
      "Residential Roofing Company",
      "Residential Roofing Contractors",
      "Roofing Contractors",
      "Roofing Project",
      "Roofing Siding",
      "Roofing Window",
      "Siding Contractor",
      "Slope Roofing",
      "Turnkey Solutions",
      "Water Damage",
    ],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
    video:
      "https://drive.google.com/file/d/1yT1HdTouvXf3ZeeoxSRa6k-oAzi0bcjg/view?usp=sharing",
  },
  {
    heading: "Bathroom Remodeler",
    name: ["Bathtub installation", "Bathtub replacement", "Shower refinishing"],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
    video:
      "https://drive.google.com/file/d/1gBMei_fgfvgzSu03YowDEtxoR1hRqsaL/view?usp=sharing",
  },
  {
    heading: "Window Installation Service",
    name: [
      "Casement window installation & replacement",
      "Double pane window installation & replacement",
      "General door installation",
      "General window replacement",
      "Hurricane impact window installation",
      "Sliding glass door installation & replacement",
      "Storm door installation & replacement",
      "Storm window installation & replacement",
      "Vinyl window installation & replacement",
      "Window frame repair & replacement",
      "Window installation",
    ],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
    video:
      "https://drive.google.com/file/d/1WEtSXFBbXznmfPkPaTwFk0bmMjXEkVwt/view?usp=sharing",
  },
  {
    heading: "Home Builder",
    name: ["Custom home design", "Home extension services"],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
    video:
      "https://drive.google.com/file/d/1yT1HdTouvXf3ZeeoxSRa6k-oAzi0bcjg/view?usp=sharing",
  },
  {
    heading: "Kitchen Remodeler",
    name: [
      "Custom kitchen cabinet construction",
      "Granite countertop installation",
      "Kitchen cabinet installation",
      "Kitchen countertop installation",
      "Kitchen countertop replacement",
      "Kitchen design",
    ],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
    video:
      "https://drive.google.com/file/d/1gBMei_fgfvgzSu03YowDEtxoR1hRqsaL/view?usp=sharing",
  },
  {
    heading: "Siding Contractor",
    name: [
      "Brick",
      "Cedar Siding",
      "Fiber Cement Siding",
      "Fiberglass Siding",
      "Natural Wood Siding",
      "Stone",
      "Stucco",
      "Vinyl Siding",
    ],
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
    video:
      "https://drive.google.com/file/d/1gBMei_fgfvgzSu03YowDEtxoR1hRqsaL/view?usp=sharing",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-[#026163] text-lg font-normal tracking-widest">
              ARTICLES
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold">Our jobs</h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative h-[560px]">
                  <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                  <h4 className="text-2xl font-bold pt-6 text-black">
                    {items.heading}
                  </h4>

                  <div className="max-h-[225px] overflow-hidden overflow-y-auto">
                    {items.name.map((el, index) => (
                      <h3
                        key={index}
                        className="text-base font-normal opacity-75 py-1 px-0.5"
                      >
                        {el}
                      </h3>
                    ))}

                    <h3 className="text-base font-normal pb-1 opacity-75">
                      {items.date}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
