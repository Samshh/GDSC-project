<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { animateText } from "./animations";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  const circles = Array.from(document.querySelectorAll(".circle"));
  const circles1 = Array.from(document.querySelectorAll(".circle1"));

  document.addEventListener("mousemove", (e) => {
    const moveX = e.clientX * 0.05 - 10;
    const moveY = e.clientY * 0.05 - 10;

    circles.forEach((circle) => {
      gsap.to(circle, { x: moveX, y: moveY, duration: 0.5 });
    });

    const moveX1 = e.clientX * 0.025 - 5;
    const moveY1 = e.clientY * 0.025 - 5;

    circles1.forEach((circle1) => {
      gsap.to(circle1, { x: moveX1, y: moveY1, duration: 0.5 });
    });
  });

  animateText(".gdsc", ".heroWrapper", "Google Developer Student Clubs", 4, 0);
});
</script>

<template>
  <div
    class="heroWrapper flex items-center justify-center w-screen h-screen select-none"
  >
    <div class="z-0">
      <div
        class="circle fixed top-32 left-32 h-24 w-24 rounded-full bg-green"
      ></div>
      <div
        class="circle fixed -top-10 right-20 h-48 w-48 rounded-full bg-blue"
      ></div>
      <div
        class="circle fixed bottom-48 -left-14 h-36 w-36 rounded-full bg-red"
      ></div>
      <div
        class="circle fixed -bottom-20 -right-20 h-96 w-96 rounded-full bg-yellow"
      ></div>
      <div
        class="circle1 fixed top-[45%] left-[45%] h-24 w-24 rounded-full bg-blue opacity-20"
      ></div>
      <div
        class="circle1 fixed top-[20%] left-[55%] h-60 w-60 rounded-full bg-red opacity-20"
      ></div>
      <div
        class="circle1 fixed top-[55%] left-[50%] h-72 w-72 rounded-full bg-green opacity-15"
      ></div>
      <div
        class="circle1 fixed top-[25%] left-[35%] h-24 w-24 rounded-full bg-yellow opacity-15"
      ></div>
    </div>

    <div
      class="flex absolute font-poppins flex-col justify-center items-center gap-3 z-[1]"
    >
      <h1 class="text-5xl font-semibold flex gap-6">
        <div class="">
          <Icon icon="logos:google-developers" />
        </div>
        <span class="gdsc text-graygoogle">GDSC</span>
      </h1>
      <p class="mapua text-3xl text-graygoogle">Mapúa-MCM</p>
    </div>
  </div>
</template>
