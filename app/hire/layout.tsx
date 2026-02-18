import type { ReactNode } from "react";
import Script from "next/script";
import { WebflowBodyEmbeds } from "@/components/pseo/webflow/WebflowBodyEmbeds";

export default function HireLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <WebflowBodyEmbeds />
      {children}

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
        strategy="beforeInteractive"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Script src="/webflow/js/webflow.js" strategy="afterInteractive" />

      <Script id="pseo-inline-intercom" strategy="afterInteractive">{`window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "s8l6wo9b",
    hide_default_launcher: false
  };`}</Script>
      <Script id="pseo-inline-calendly" strategy="afterInteractive">{`// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/s8l6wo9b'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/s8l6wo9b';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}</Script>
      <Script src="https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js" strategy="afterInteractive" />
      <Script id="pseo-inline-message" strategy="afterInteractive">{`window.addEventListener("message", function(e) {
    if (e.data.event && e.data.event === "calendly.event_scheduled") {
      const payload = e.data.payload;
      if (window.__calendlySource === "pop-up") {
        console.log("✅ Booking from special pop-up detected", payload);
        fetch("https://hook.us1.make.com/0imnr75wg6uygn696xe5asclmt1dwdx5", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e.data)
        })
          .then(res => res.text())
          .then(txt => {
          console.log("Webhook response:", txt);
          // Only redirect AFTER fetch completes
          setTimeout(() => {
            window.location.href = "/demo/success";
          }, 5000);
        })
          .catch(err => {
          console.error("Webhook error:", err);
        });
        window.__calendlySource = null;
      } else {
        setTimeout(() => {
          window.location.href = "/demo/success";
        }, 5000);
      }
    }
  });
  // Linking to a specific tab on the pege based on URL parameters
  $(function() {
    function changeTab(tabName) {
      if (!tabName) {
        const urlParams = new URLSearchParams(window.location.search);
        tabName = urlParams.get('tab');
      }
      if (!tabName) return;
      const tabEl = $('[data-w-tab="' + tabName + '"]');
      if (tabEl.length) {
        tabEl.click();
      }
    }
    function scrollToAnchor(hash) {
      if (!hash) {
        hash = window.location.hash;
      }
      if (hash) {
        const target = $(hash);
        if (target.length) {
          $('html, body').animate(
            { scrollTop: target.offset().top },
            0 // instant scroll
          );
        }
      }
    }
    changeTab();
    scrollToAnchor();
    if (window.location.pathname === '/') {
      const dropdownLinks = document.querySelectorAll('a.dropdown-link, a[footer-link]');
      dropdownLinks.forEach((element) => {
        element.addEventListener('click', function (e) {
          const href = element.getAttribute('href');
          if (!href) return;
          const url = new URL(href, window.location.origin);
          const tabName = url.searchParams.get('tab');
          if (tabName) {
            e.preventDefault();
            changeTab(tabName);
            scrollToAnchor(url.hash);
            history.pushState({}, '', href);
          }
        });
      });
    }
  });
  // END`}</Script>
      <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script id="pseo-inline-swiper-init" strategy="afterInteractive">{`let designSwiper = null;
  let marketingSwiper = null;
  let devSwiper = null;
  let nocodeSwiper = null;
  let achievementsSwiper = null;
  function initOrDestroySwiper() {
    const isSmallDesktop = window.innerWidth < 1280;
    const isTablet = window.innerWidth < 991;
    // Design Services
    if (isSmallDesktop && !designSwiper) {
      designSwiper = new Swiper('#design-services', {
        slidesPerView: 1.1,
        spaceBetween: 12,
        breakpoints: {
          640: { slidesPerView: 2.2 },
          991: { slidesPerView: 3.2 },
        },
      });
    } else if (!isSmallDesktop && designSwiper) {
      designSwiper.destroy(true, true);
      designSwiper = null;
    }
    // Marketing Services
    if (isSmallDesktop && !marketingSwiper) {
      marketingSwiper = new Swiper('#marketing-services', {
        slidesPerView: 1.1,
        spaceBetween: 12,
        breakpoints: {
          640: { slidesPerView: 2.2 },
          991: { slidesPerView: 3.2 },
        },
      });
    } else if (!isTablet && marketingSwiper) {
      marketingSwiper.destroy(true, true);
      marketingSwiper = null;
    }
    // Dev Services
    if (isSmallDesktop && !devSwiper) {
      devSwiper = new Swiper('#dev-services', {
        slidesPerView: 1.1,
        spaceBetween: 12,
        breakpoints: {
          640: { slidesPerView: 2.2 },
          991: { slidesPerView: 3.2 },
        },
      });
    } else if (!isTablet && devSwiper) {
      devSwiper.destroy(true, true);
      devSwiper = null;
    }
    // No-code Services
    if (isSmallDesktop && !nocodeSwiper) {
      nocodeSwiper = new Swiper('#nocode-service', {
        slidesPerView: 1.1,
        spaceBetween: 12,
        breakpoints: {
          640: { slidesPerView: 2.2 },
          991: { slidesPerView: 3.2 },
        },
      });
    } else if (!isTablet && nocodeSwiper) {
      nocodeSwiper.destroy(true, true);
      nocodeSwiper = null;
    }
    if (isTablet && !achievementsSwiper) {
      achievementsSwiper = new Swiper('.achievements-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 12,
        loop: true,
        initialSlide: 1,
        centeredSlides: true,
        breakpoints: {
          480: { slidesPerView: 'auto' },
          320: { slidesPerView: 1.082 }
        },
      });
    } else if (!isTablet && achievementsSwiper) {
      achievementsSwiper.destroy(true, true);
      achievementsSwiper = null;
    }
  }
  window.addEventListener("load", (event) => {
    /* NO CODE SWIPER WILL BE USED LATER! DO NOT DELETE
    const serviceSwiper = new Swiper('.service_image-wrapper.no-code-image', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.story__pagination',
        renderBullet: function (index, className) {
          return '<div class="story-bullet"> <div class="swiper-pagination-progress"></div> </div>';
        }
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          let currentSlide = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-slide')[swiper.activeIndex];
          let currentBullet = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-pagination-progress')[swiper.realIndex];
          let fullTime = currentSlide.dataset.swiperAutoplay ? parseInt(currentSlide.dataset.swiperAutoplay) : swiper.params.autoplay.delay;
          let percentage = Math.min(Math.max(parseFloat(((fullTime - time) * 100 / fullTime).toFixed(1)), 0), 100) + '%';
          gsap.set(currentBullet, {width: percentage});
        },
        transitionEnd(swiper) {
          let allBullets = $('.service_image-wrapper.no-code-image .swiper-pagination-progress');
          let bulletsBefore = allBullets.slice(0, swiper.realIndex);
          let bulletsAfter = allBullets.slice(swiper.realIndex, allBullets.length);
          if (bulletsBefore.length) {
            gsap.set(bulletsBefore, {width: '100%'})
          }
          if (bulletsAfter.length) {
            gsap.set(bulletsAfter, {width: '0%'})
          }
          let activeSlide = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-slide')[swiper.realIndex];
        },
      }
    });*/
    // Step 1: Create Swiper instance first (without event handlers)
    const serviceSwiper = new Swiper('.service_image-wrapper.no-code-image', {
      slidesPerView: 1,
      loop: true,
      speed: 1,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.story__pagination',
        renderBullet: function (index, className) {
          return '<div class="story-bullet"> <div class="swiper-pagination-progress"></div> </div>';
        }
      },
    });
    // Step 2: Add event handlers AFTER initialization
    serviceSwiper.on('slideChange', function () {
      document.querySelectorAll('.slide-img, .service-image').forEach(img => {
        img.classList.remove('zoom-in', 'left-to-right', 'top-to-bottom');
      });
      const activeSlide = serviceSwiper.slides[serviceSwiper.activeIndex];
      const img = activeSlide.querySelector('.service-image');
      const animationType = img?.dataset?.animation;
      if (animationType) {
        img.classList.add(animationType);
      }
    });
    serviceSwiper.on('autoplayTimeLeft', function (swiper, time, progress) {
      const currentSlide = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-slide')[swiper.activeIndex];
      const currentBullet = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-pagination-progress')[swiper.realIndex];
      const fullTime = currentSlide.dataset.swiperAutoplay ? parseInt(currentSlide.dataset.swiperAutoplay) : swiper.params.autoplay.delay;
      const percentage = Math.min(Math.max(parseFloat(((fullTime - time) * 100 / fullTime).toFixed(1)), 0), 100) + '%';
      gsap.set(currentBullet, { width: percentage });
    });
    serviceSwiper.on('transitionEnd', function (swiper) {
      const allBullets = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-pagination-progress');
      const bulletsBefore = Array.from(allBullets).slice(0, swiper.realIndex);
      const bulletsAfter = Array.from(allBullets).slice(swiper.realIndex);
      bulletsBefore.forEach(b => gsap.set(b, { width: '100%' }));
      bulletsAfter.forEach(b => gsap.set(b, { width: '0%' }));
      const activeSlide = document.querySelectorAll('.service_image-wrapper.no-code-image .swiper-slide')[swiper.realIndex];
    });
    // Trigger animation for first slide
    setTimeout(() => {
      const activeSlide = serviceSwiper.slides[serviceSwiper.activeIndex];
      const img = activeSlide.querySelector('.service-image');
      const animationType = img?.dataset?.animation;
      if (animationType) {
        img.classList.add(animationType);
      }
    }, 50);
    const swiper = new Swiper('.achievements-component', {
      slidesPerView: 1.082,
      spaceBetween: 12,
      initialSlide: 1,
      //speed: 10000, // smooth transition speed
      loop: true,
      freeMode: false,
      navigation: {
        nextEl: '[next-achievement]',
        prevEl: '[prev-achievement]',
      },
      /*autoplay: {
      	delay: 4000,
        //delay: 0,         // no delay between transitions
        //disableOnInteraction: false
      },*/
      breakpoints: {
        768: {
          slidesPerView: 1.1,
        },
        1024: {
          slidesPerView: 3.001,
        }
      }
    });
    const talentsSwiper = new Swiper('.talents-swiper', {
      slidesPerView: 1.1,
      spaceBetween: 12,
      mousewheel: {
        releaseOnEdges: true, 
        forceToAxis: true
      },
      navigation: {
        nextEl: '[next-talent]',
        prevEl: '[prev-talent]',
      },
      breakpoints: {
        479: {
          slidesPerView: 1.8,
        },
        991: {
          slidesPerView: 3.1,
        },
        1280:{
          slidesPerView: 4,
        }
      }
    });
    const casesSwiper = new Swiper('.cases_swiper', {
      slidesPerView: 1.082,
      spaceBetween: 12,
      centeredSlides: true,
      loop: true,
      initialSlide: 1,
      /*pagination: {
        el: '.cases-pagination',
        type: 'bullets',
        clickable: true
      },*/
      navigation: {
        nextEl: '[next-case]',
        prevEl: '[prev-case]',
      },
      breakpoints: {
        768: {
          slidesPerView: 1.1,
        },
        1280: {
          slidesPerView: 1.66,
        }
      }
    });
    initOrDestroySwiper();
    /* COMMENTED TILL RETURNING OF NO-CODE SERVICES SLIDER
    $('[data-w-tab]').on('click', function () {
        // Delay is necessary to allow the content to become visible
        setTimeout(() => {
            serviceSwiper.update();     // Recalculate dimensions
            serviceSwiper.slideToLoop(serviceSwiper.realIndex, 0); // Optional: reset position
            serviceSwiper.autoplay.start(); // Restart autoplay
        }, 100); // 100ms delay is usually enough
    });
    */
  });
  window.addEventListener('resize', () => {
    initOrDestroySwiper();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const whyStepsTrigger = document.querySelector('.how-choose-pro-button');
    whyStepsTrigger.addEventListener('click', function(){
      document.querySelector('.why-steps-animated-wrapper').style.display = 'block';
    });
    const counters = document.querySelectorAll('[counter="true"]');
    const getDecimalPlaces = (numberStr) => {
      const match = numberStr.match(/\.(\d+)/);
      return match ? match[1].length : 0;
    };
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endStr = el.textContent.trim();
          const startStr = el.getAttribute('start-number') || '0';
          const start = parseFloat(startStr);
          const end = parseFloat(endStr);
          const decimals = Math.max(getDecimalPlaces(endStr), getDecimalPlaces(startStr));
          const duration = parseFloat(el.getAttribute('duration')) || 2; // seconds
          const delay = parseInt(el.getAttribute('delay')) || 0; // ms
          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const current = start + (end - start) * progress;
            el.textContent = current.toFixed(decimals);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = end.toFixed(decimals);
            }
          };
          setTimeout(() => {
            requestAnimationFrame(animate);
          }, delay);
          observer.unobserve(el); // run only once per element
        }
      });
    }, {
      threshold: 0.5
    });
    counters.forEach(el => counterObserver.observe(el));
  });
  let initialWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    const crossed768 = (initialWidth < 768 && currentWidth >= 768) || (initialWidth >= 768 && currentWidth < 768);
    const crossed1440 = (initialWidth < 1440 && currentWidth >= 1440) || (initialWidth >= 1440 && currentWidth < 1440);
    if (crossed768 || crossed1440) {
      location.reload();
    }
  });
  window.addEventListener("load", (event) => {
    const wfCardsSwiper = new Swiper('.webflow-cards', {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 12,
      initialSlide: 1,
      navigation: {
        nextEl: '[next-wf-card]',
        prevEl: '[prev-wf-card]',
      },
    });
  });`}</Script>

      <style dangerouslySetInnerHTML={ { __html: `<style>
  .case_slide:not(.cta-slide)::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 180px;
    z-index: 0;
    background: #00000017;
    /*background: #00000003;*/
    mask: linear-gradient(to bottom, transparent, #000020f7 40%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all .25s;
    opacity: 0;
  }
  .case_slide:hover::after{
    opacity: 1;
  }
  .case-slide_image{
    transition: all .25s ease;
  }
  .case_slide:hover .case-slide_image{
    transform: scale(1.05);
  }
  @media screen and (max-width: 992px){
    .case_slide.swiper-slide-active:not(.cta-slide)::after{
      opacity: 1!important;
    }
  }
  @media screen and (max-width: 768px){
    .case_slide::after{
      height: 134px!important;
    }
  }
  /* Base Styles */
  #design-services .swiper-slide {
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  #marketing-services .swiper-slide,
  #dev-services .swiper-slide,
  #nocode-service .swiper-slide {
    display: flex;
  }
  /* Responsive Heights */
  @media screen and (max-width: 1439px) {
    #marketing-services .swiper-slide,
    #dev-services .swiper-slide,
    #nocode-service .swiper-slide{
      min-height: 150px;
      height: auto;
    }
  }
  @media screen and (max-width: 991px) {
    #nocode-service .swiper-slide {
      height: 295px;
    }
  }
  /* Pagination Styles */
  .story__pagination .story-bullet {
    opacity: unset;
    background: #FFFFFF33;
    position: relative;
    width: 100%;
    border-radius: 10000px;
    overflow: hidden;
    height: 4px !important;
  }
  .story__pagination .story-bullet .swiper-pagination-progress {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  @media screen and (min-width: 1440px) {
    #marketing-services .swiper-wrapper,
    #dev-services .swiper-wrapper {
      display: grid;
    }
  }
  /* Cases Pagination */
  .cases-pagination {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .cases-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #D4D4D8;
    margin: 0 !important;
    opacity: 1;
  }
  .cases-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #52525B;
  }
  @media screen and (max-width: 568px) {
    .cases-pagination {
      gap: 12px;
    }
  }
  /*@media screen and (min-width: 1280px) {
  #nocode-service .swiper-wrapper, #marketing-services .swiper-wrapper, #dev-services .swiper-wrapper{
  display: grid;
  }
  }*/
  @media (991px <= width){
    .swiper-wrapper.achievements-swiper_wrapper{
      display: grid;
    }
  }
  .achievements-item.swiper-slide{
    display: flex;
    height: auto;
  }
  .cases_swiper .swiper-wrapper{
    gap: 0!important;
  }
  .achievements-item.swiper-slide, .achievements-component .swiper-slide{
    display: flex;
    height: auto;
  }
  /*.achievements-component.swiper-free-mode>.swiper-wrapper{
  transition-timing-function: linear;
  }*/
  @media screen and (min-width: 1280px) {
    #marketing-services .swiper-wrapper, #dev-services .swiper-wrapper{
      display: grid;
    }
    .service-image.webflow-2{
      height: 748px;
    }
    .service-image.webflow-3{
      width: 637px;
      max-width: none;
      min-width: auto;
    }
  }
  /*@media screen and (max-width: 1279px){
  .service_image-wrapper {
  display: none;
  }
  }*/
  .service_image-wrapper.no-code-image .swiper-slide{
    overflow: hidden;
    border-radius: 36px;
  }
  .service_image-wrapper.no-code-image .swiper-slide img{
    border-radius: 36px;
  }
  .role-card.swiper-slide{
    display: flex;
    height: auto;
  }
</style>` } } />
    </>
  );
}
