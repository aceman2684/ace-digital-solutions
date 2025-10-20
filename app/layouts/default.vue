<script setup lang="ts">
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-background">
    <AppHeader :scrolled />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
