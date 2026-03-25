"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

export function RelatedRolesSwiper() {
    useEffect(() => {
        const el = document.querySelector(".webflow-cards");

        if (!el || el.classList.contains("swiper-initialized")) return;

        const swiper = new Swiper(".webflow-cards", {
            modules: [FreeMode, Mousewheel],
            direction: "horizontal",
            slidesPerView: "auto",
            spaceBetween: 12,
            freeMode: {
                enabled: true,
                momentum: true,
            },
            mousewheel: {
                enabled: true,
                forceToAxis: false,
                releaseOnEdges: true,
                sensitivity: 1,
                eventsTarget: "container",
            },
            grabCursor: true,
        });

        return () => swiper.destroy(true, true);
    }, []);

    return null;
}