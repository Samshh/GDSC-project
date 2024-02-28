import { gsap } from "gsap";

export const animateText = (selector: string, trigger: string, text: string, duration: number, delay: number) => {
    gsap.to(selector, {
        duration: duration,
        text: text,
        delay: delay,
        ease: "power1.in",
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });
};

export const ObjectChangeColor = (selector: string, color: string, trigger: string, start: string, end: string) => {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            toggleActions: "play reverse play reverse",
            scrub: false,
            markers: false,
        },
        ease: "power1.inOut",
        backgroundColor: color,
    });
};

export const changeColor = (selector: string, color: string, trigger: string, start: string, end: string) => {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            toggleActions: "play reverse play reverse",
            scrub: false,
            markers: false,
        },
        ease: "power1.inOut",
        color: color,
    });
};

export const BGchangeColor = (trigger: string, color: string) => {
    gsap.to("#background", {
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: false,
            markers: false,
        },
        ease: "power1.inOut",
        backgroundColor: color,
    });
};

export const cursorChange = (trigger: string, color: string) => {
    gsap.to(".custom-cursor", {
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: false,
            markers: false,
        },
        ease: "power1.inOut",
        backgroundColor: color,
    });
};

export const scrollerpic = (selector: string, trigger: string, opacity: number, x: number) => {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            scrub: false,
            markers: false,
        },
        ease: "power1.inOut",
        x: x,
        opacity: opacity,
    });
};

export const pulse = (selector: string, duration: number, delay: number) => {
    gsap.to(selector, {
      duration: duration,
      delay: delay,
      scaleX: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  };