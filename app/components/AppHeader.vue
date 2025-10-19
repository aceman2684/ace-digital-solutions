<script setup lang="ts">
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
  <nav class="relative bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex shrink-0 items-center">
            <NuxtImg src="/images/logo.png" alt="ACE Digital Solutions Logo" class="h-16 w-auto" />
            <h1 class="text-lg font-bold">ACE Digital Solutions</h1>
          </div>

          <!-- Desktop Links -->
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NavItem v-for="link in desktopLinks" :key="link.name" :to="link.to">
              {{ link.name }}
            </NavItem>
          </div>
        </div>

        <div class="hidden md:flex md:items-center">
          <UiButton as="a" href="/contact">Get in Touch</UiButton>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <AnimatedMenuButton :value="isOpen" class="size-10" @toggled="toggleMenu" />
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="grid-rows-[0fr] opacity-0"
      enter-to-class="grid-rows-[1fr] opacity-100"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="grid-rows-[1fr] opacity-100"
      leave-to-class="grid-rows-[0fr] opacity-0"
    >
      <div v-if="isOpen" class="grid md:hidden">
        <div class="overflow-hidden">
          <!-- Mobile Links -->
          <div class="space-y-1 pt-2 pb-3">
            <NavItem v-for="link in mobileLinks" :key="link.name" :to="link.to">{{ link.name }}</NavItem>
          </div>

          <div class="pt-4 pb-3">
            <div class="flex items-center px-4 sm:px-6">
              <UiButton as="a" href="/contact" class="w-full" size="lg">Get in Touch</UiButton>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
