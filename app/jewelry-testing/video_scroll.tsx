"use client"
import Video_Item from "./video_item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Video_Scroll() {

    const videos = [
        "https://www.youtube.com/embed/mh_E048DhWg?si=WUCWzWfL-fehcUK1",
        "https://www.youtube.com/embed/mh_E048DhWg?si=WUCWzWfL-fehcUK1",
        "https://www.youtube.com/embed/mh_E048DhWg?si=WUCWzWfL-fehcUK1",
        "https://www.youtube.com/embed/mh_E048DhWg?si=WUCWzWfL-fehcUK1",
        "https://www.youtube.com/embed/rWcWu92sr-s?si=pn5OrfuQL-V48r2s",
        "https://www.youtube.com/embed/rWcWu92sr-s?si=pn5OrfuQL-V48r2s",
        "https://www.youtube.com/embed/rWcWu92sr-s?si=pn5OrfuQL-V48r2s",
        "https://www.youtube.com/embed/rWcWu92sr-s?si=pn5OrfuQL-V48r2s",
    ];

    return (
        <div className="mt-10 lg:mt-28 mb-10 w-full relative px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={"auto"}
            >
                {
                    videos.map((i, index) => (
                        <SwiperSlide key={index} style={{ width: "180px" }}>
                            <Video_Item url={i} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}