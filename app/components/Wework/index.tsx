"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Co-founder',
        name: 'Bathroom',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Bedroom',
        imgSrc: '/images/wework/avatar2.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Living room',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Kitchen',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Fire place',
        imgSrc: '/images/wework/avatar5.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Balcony',
        imgSrc: '/images/wework/avatar6.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Windows',
        imgSrc: '/images/wework/avatar7.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Basement',
        imgSrc: '/images/wework/avatar8.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Stairs',
        imgSrc: '/images/wework/avatar9.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Closet',
        imgSrc: '/images/wework/avatar10.svg',
    },
    {
        profession: 'Co-founder',
        name: 'Roof',
        imgSrc: '/images/wework/avatar11.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            swipeToSlide: false,
            swipe: false,
            touchMove: false,
            // centerMode: true,
            slidesToScroll: 1,
            // draggable: true,
            arrows: false,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 0,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Your Trusted Partner for</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Comprehensive Renovation Solutions.</h3>
                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto" />
                                    {/* <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                {/* <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3> */}
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
