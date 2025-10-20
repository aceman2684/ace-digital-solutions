<script setup lang="ts">
const { scrolled = false } = defineProps<{
  scrolled?: boolean;
}>();

const links = [
  { name: "Home", to: "/", mobileOnly: true },
  { name: "About", to: "/about" },
];
const desktopLinks = links.filter((link) => !link.mobileOnly);
const mobileLinks = links;

const isOpen = ref(false);

function toggleMenu(value: boolean) {
  isOpen.value = value;
}
</script>

<template>
  <header
    class="sticky inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out"
    :class="{
      'bg-background shadow-sm': scrolled || isOpen,
      'bg-transparent shadow-none': !(scrolled || isOpen),
    }"
  >
    <nav class="flex h-16 items-center justify-between px-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 flex items-center p-1.5">
          <NuxtImg src="/images/logo.png" alt="ACE Digital Solutions Logo" class="h-16 w-auto" />
          <h1 class="text-lg font-bold">ACE Digital Solutions</h1>
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <AnimatedMenuButton :value="isOpen" class="size-10" @toggled="toggleMenu" />
      </div>
      <div class="hidden lg:flex lg:h-full lg:grow lg:items-center lg:gap-x-12">
        <NavItem v-for="link in desktopLinks" :key="link.name" :to="link.to">
          {{ link.name }}
        </NavItem>
      </div>
      <div class="hidden md:items-center lg:flex lg:flex-1 lg:justify-end">
        <UiButton as="a" href="/contact">Get in Touch</UiButton>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="grid-rows-[0fr] opacity-0"
      enter-to-class="grid-rows-[1fr] opacity-100"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="grid-rows-[1fr] opacity-100"
      leave-to-class="grid-rows-[0fr] opacity-0"
    >
      <div v-if="isOpen" class="bg-background grid lg:hidden">
        <div class="overflow-hidden">
          <!-- Mobile Links -->
          <div class="space-y-1 px-6 pt-2 pb-3">
            <NavItem v-for="link in mobileLinks" :key="link.name" :to="link.to">{{ link.name }}</NavItem>
          </div>
          <div class="px-6 pt-4 pb-3">
            <UiButton as="a" href="/contact" class="w-full" size="lg">Get in Touch</UiButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
