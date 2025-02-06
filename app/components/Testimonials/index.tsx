"use client";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Michael & Sarah T.",
    profession: "Professional Team!",
    comment: "We had an amazing experience with this company! They designed and built our dream home in Long Island with incredible attention to detail. The team was professional, communicative, and always on schedule. Our house turned out even better than we imagined! Highly recommend their services!",
    imgSrc: "/images/testimonial/user1.svg",
  },
  {
    name: "Emily R.",
    profession: "Stunning Apartment Renovation!",
    comment: "We hired them for a full renovation of our apartment, and the results were outstanding! The quality of work, the materials used, and the efficiency of the team exceeded our expectations. They turned our vision into reality, and we couldn't be happier with our new space!",
    imgSrc: "/images/testimonial/user2.svg",
  },
  {
    name: "David & Lisa M.",
    profession: "Reliable & Trustworthy!",
    comment: "From start to finish, the team was incredibly professional. They built our custom home with top-notch craftsmanship and kept us informed throughout the entire process. Everything was completed on time and within budget. We are beyond thrilled with our new home!",
    imgSrc: "/images/testimonial/user3.svg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    return (
      <div
        className="bg-testimonial pt-20 lg:py-20"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
              See what others are saying.
            </h3>
          </div>
          <div className="flex flex-wrap justify-around">
            {postData.map((items, i) => (
              <div key={i} className={`relative ${i && 'hidden sm:block'}`}>
                <div className="bg-white test-sha m-3 p-10 my-6 rounded-3xl max-w-[360px]">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={71}
                    height={71}
                    className="inline-block m-auto absolute test-pos"
                  />
                  <h4 className="text-base font-medium text-testColor my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "lightgrey" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-xs font-medium  pb-2 opacity-50">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
