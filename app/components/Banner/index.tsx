"use client";
import Image from "next/image";
import ContactUsForm from "../Navbar/Contactus";
import { useState } from "react";

const Banner = () => {
  const [openContactUsForm, setOpenContactUsForm] = useState(false);
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0 z-0">
          <div className="py-3 text-center lg:text-start">
            <button className="text-[#026163] bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              Construction Corporation
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-darkpurple">
              Welcome to DST Construction company
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button
              onClick={() => setOpenContactUsForm(true)}
              className="text-sm md:text-xl font-semibold hover:shadow-xl bg-[#026163] text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#026163]"
            >
              Get Started
            </button>
          </div>
        </div>
        <ContactUsForm
          visibleBtn={false}
          defaultOpen={openContactUsForm}
          handleClose={() => setOpenContactUsForm(false)}
        />

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            src="/images/banner/banner.jpg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
