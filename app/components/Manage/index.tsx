"use client";
import { useState } from "react";
import Image from "next/image";

const names = [
  {
    heading: "Startup",
    price: 41,
    user: "per user, per month",
    button: "Contact Us",
    profiles: "5 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "400+ Templated",
    view: "Calendar View",
    support: "24/7 Support",
    category: "yearly",
  },
  {
    heading: "Business",
    price: 29,
    user: "per user, per month",
    button: "Contact Us",
    profiles: "10 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "600+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "yearly",
  },
  {
    heading: "Agency",
    price: 139,
    user: "per user, per month",
    button: "Contact Us",
    profiles: "100 Social Profiles",
    posts: "100 Scheduled Posts Per Profile",
    templates: "800+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "yearly",
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
              <button className="text-sm font-bold text-[#026163] bg-transparent hover:bg-[#026163] hover:text-white border-2 border-[#026163] rounded-full py-4 px-12 mb-6">
                {items.button}
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                {items.profiles}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.posts}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.templates}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.view}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
