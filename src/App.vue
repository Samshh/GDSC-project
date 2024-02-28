<script setup lang="ts">
import cursor from "./components/cursor.vue";
import hero from "./components/hero.vue";
import about from "./components/about.vue";
import Lenis from "@studio-freight/lenis";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import type aboutVue from "./components/about.vue";

const dot1 = ref(null);
const dot2 = ref(null);
const dot3 = ref(null);
const dot4 = ref(null);
const isPreloaderDone = ref(false);

onMounted(() => {
  animateDots();
});

function animateDots() {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(dot1.value, { y: -20, duration: 0.5, ease: "power1.inOut" })
    .to(dot1.value, { y: 0, duration: 0.5, ease: "power1.inOut" })
    .to(dot2.value, { y: -20, duration: 0.5, ease: "power1.inOut" }, "-=0.4")
    .to(dot2.value, { y: 0, duration: 0.5, ease: "power1.inOut" })
    .to(dot3.value, { y: -20, duration: 0.5, ease: "power1.inOut" }, "-=0.4")
    .to(dot3.value, { y: 0, duration: 0.5, ease: "power1.inOut" })
    .to(dot4.value, { y: -20, duration: 0.5, ease: "power1.inOut" }, "-=0.4")
    .to(dot4.value, { y: 0, duration: 0.5, ease: "power1.inOut" });

  setTimeout(() => {
    gsap.to(".preloader", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".preloader")?.remove();
        isPreloaderDone.value = true;
      },
    });
  }, 3000);
}
const lenis = new Lenis();

function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

requestAnimationFrame(raf);
</script>

<template>
  <div class="cursor-none">
    <cursor />
    <div
      class="preloader flex items-center justify-center h-screen bg-white top-0 bottom-0 left-0 right-0 z-50 fixed"
    >
      <div class="dot w-6 h-6 mx-2 bg-blue rounded-full" ref="dot1"></div>
      <div class="dot w-6 h-6 mx-2 bg-red rounded-full" ref="dot2"></div>
      <div class="dot w-6 h-6 mx-2 bg-yellow rounded-full" ref="dot3"></div>
      <div class="dot w-6 h-6 mx-2 bg-green rounded-full" ref="dot4"></div>
    </div>
    <div v-if="isPreloaderDone">
      <div id="background" class="-z-10 fixed bg-mainbg w-screen h-screen"></div>
      <hero />
      <about />
    </div>
  </div>
</template>

<style scoped></style>
