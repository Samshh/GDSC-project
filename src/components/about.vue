<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { changeColor, BGchangeColor, cursorChange } from "./animations";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

const textRef: Ref<HTMLElement | null> = ref(null);
const scrollToTop = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: 0, autoKill: false },
    ease: "expo.inOut",
  });
};

onMounted(() => {
  changeColor(
    ".aboutMe",
    "#ffff",
    ".aboutWrapper",
    "top center",
    "bottom center"
  );
  BGchangeColor(".aboutWrapper", "#161616");
  cursorChange(".aboutWrapper", "#ffff");

  gsap.fromTo(
    ".solidboxtop",
    {
      y: -100,
      autoAlpha: 0,
    },
    {
      scrollTrigger: {
        trigger: ".aboutWrapper",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      y: 0,
      autoAlpha: 1,
      duration: 0.25,
      ease: "power1.out",
    }
  );

  if (textRef.value) {
    const words = textRef.value.innerText.split(" ");

    textRef.value.innerText = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      textRef.value?.appendChild(span);
    });

    gsap.from(textRef.value.children, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".aboutdesc",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  }
});
</script>

<template>
  <div class="aboutWrapper h-screen w-screen flex flex-col">
    <div class="solidboxtop w-screen h-[7%] top-0 fixed bg-black z-20 flex">
      <div class="flex flex-col justify-center items-center mx-[10%]">
        <button
          class="flex gap-3 font-poppins text-4xl text-white cursor-none"
          @click="scrollToTop"
        >
          <Icon icon="logos:google-developers" /><span
            class="text-2xl font-semibold select-none"
            >GDSC Mapúa-MCM</span
          >
        </button>
      </div>
    </div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div
        class="aboutMe font-poppins flex flex-col text-graygoogle justify-center items-center gap-6 w-auto text-justify z-10 px-80 select-none"
      >
        <h1 class="text-5xl font-semibold">about us.</h1>
        <p class="aboutdesc text-3xl" ref="textRef">
          Founded in 2022, GDSC Mapúa-MCM is a Google-powered community of
          students from all undergraduate programs with an interest in growing a
          career or network in the field of technology. The organization aims to
          grow its members’ knowledge in technology in a peer-to-peer learning
          environment while getting access to Google developer tools and other
          similar resources, to enable peer-to-peer learning and collaboration
          in developing meaningful solutions for the local community, and to
          showcase prototypes and solutions to the local community and industry
          leaders.
        </p>
      </div>
    </div>
    <div
      class="solidbox w-screen h-[15%] bottom-0 relative bg-graygoogle rounded-t-[45px] z-20 flex justify-center"
    >
      <div class="solidline w-[25%] h-[8%] rounded-md bg-gray-500 mt-4"></div>
    </div>
  </div>
</template>
