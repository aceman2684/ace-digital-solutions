<script setup lang="ts"></script>

<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="border-border mt-12 border-t pt-8 text-center md:flex md:items-center md:justify-between">
        <NuxtLink to="https://github.com/aceman2684" target="_blank" class="md:order-2 md:block">
          <span class="sr-only">GitHub</span>
          <Icon name="uil:github" size="24" class="text-muted-foreground hover:text-accent-foreground" />
        </NuxtLink>
        <p class="text-muted-foreground mt-8 text-sm/6 text-pretty md:order-1 md:mt-0">
          &copy; <NuxtTime :datetime="Date.now()" year="numeric" /> ACE Digital Solutions, LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
