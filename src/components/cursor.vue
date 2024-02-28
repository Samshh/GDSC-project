<template>
    <div v-if="smallscreen" class="custom-cursor fixed w-3 h-3 rounded-full z-50 bg-graygoogle" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from "vue";
  
  const smallscreen = ref(window.innerWidth > 1024);
  
  const updateScreenSize = () => {
    smallscreen.value = window.innerWidth > 1024;
  };
  
  const cursorX = ref(0);
  const cursorY = ref(0);
  
  const updateCursorPosition = (event: any) => {
    cursorX.value = event.clientX;
    cursorY.value = event.clientY;
  };
  
  onMounted(() => {
    document.addEventListener("mousemove", updateCursorPosition);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", updateCursorPosition);
  });
  </script>
  