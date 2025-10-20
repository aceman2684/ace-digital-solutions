<script setup lang="ts">
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-background relative w-full">
    <AppHeader :scrolled />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
