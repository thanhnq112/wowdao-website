'use client'

// import Link from "next/link";
// import Image from "next/image";
import style from './teams.module.css'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { dataTeams } from '../Data/dataTeams'
import SlideComponent from '../SlideComponent'

export default function Teams() {

    const [slotInSlide, setSlotInSlide] = useState(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Client-side-only code
            const userAgent = window.navigator.userAgent.toLowerCase();
            const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
            setSlotInSlide(isTablet ? 6 : 8)
        }
    }, []);


    return (
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>Our Teams</div>
                <div className={style.titleDes}>We prioritize your success and continuously strive to achieve it. Let&apos;s experience the difference that our team brings!</div>
            </div>

            <div className={style.content}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    // navigation
                    pagination={{
                        clickable: true
                    }}

                    loop={true}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {(new Array(Math.ceil(dataTeams.length / slotInSlide)).fill(undefined)).map((e, index) => {
                        return (
                            <SwiperSlide key={index} className={style.slideComponent}>
                                <SlideComponent slotInSlide={slotInSlide} index={index} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}