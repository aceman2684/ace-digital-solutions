<script setup lang="ts">
const isNavExpanded = ref(true);
const scrolled = ref(false);

const handleToggleNav = () => {
  isNavExpanded.value = !isNavExpanded.value;
};

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
    <div
      class="fixed inset-0 z-40 bg-gray-900 transition-opacity duration-300"
      :class="isNavExpanded ? 'opacity-40' : 'pointer-events-none opacity-0'"
      @click="handleToggleNav()"
    ></div>

    <AppHeader :is-open="isNavExpanded" :scrolled @toggle-nav="handleToggleNav" />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
