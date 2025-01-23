"use client";
import { useState } from "react";
import Image from "next/image";

const names = [
  {
    heading: "Interior Renovations",
    price: 41,
    user: "per contractor, per hour",
    profiles: "5 Social Profiles",
    subtitle:
      "We bring your vision to life with complete interior overhauls, including:",
    items: [
      "Apartment and room renovations.",
      "Hallway transformations.",
      "Bathroom remodeling with precision and style.",
    ],
  },
  {
    heading: "Exterior Renovations",
    price: 29,
    user: "per contractor, per hour",
    profiles: "10 Social Profiles",
    subtitle:
      "Enhance the curb appeal and functionality of your property with our professional exterior services",
    items: ["Painting", "Plastering", "other structural upgrades."],
  },
  {
    heading: "Specialty Services",
    price: 139,
    user: "per contractor, per hour",
    profiles: "100 Social Profiles",
    subtitle:
      "We offer specialized services to ensure your space reflects your unique style, including",
    items: [
      "Wall painting and decorative finishes.",
      "Plastering and surface preparation.",
      "Installation of drywall.",
      "Installation Gypsum board systems.",
      "Venetian plaster applications",
    ],
  },
];

const Manage = () => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Manage All Your Social Media <br /> Profiles From One Place.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {names.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                ${items.price}
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.subtitle}
              </p>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <div className="max-h-[225px] overflow-hidden overflow-y-auto">
                {items.items.map((el, index) => (
                  <h3
                    key={index}
                    className="text-base font-normal opacity-75 py-1 px-0.5"
                  >
                    {el}
                  </h3>
                ))}
              </div>
              {/* <div className="mb-3 mt-6 text-left">
                {items.items.map((el) => (
                  <h3 className="text-sm font-medium text-darkgrey" key={el}>
                    {el}
                  </h3>
                ))}
              </div> */}
              <button className="text-sm font-bold text-[#026163] bg-transparent hover:bg-[#026163] hover:text-white border-2 border-[#026163] rounded-full py-4 px-12 mb-6">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
