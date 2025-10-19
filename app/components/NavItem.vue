<script setup lang="ts">
interface NavItemProps {
  to: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  replace?: boolean;
  external?: boolean;
}

defineProps<NavItemProps>();
</script>

<template>
  <NuxtLink v-slot="{ isActive, href, navigate }" v-bind="$props" custom>
    <a
      :href
      class="block border-l-4 py-3 pr-4 pl-3 text-base font-medium sm:pr-6 sm:pl-5 md:inline-flex md:items-center md:border-b-2 md:border-l-0 md:px-1 md:pt-1 md:pb-0 md:text-sm"
      :class="{
        'bg-accent border-primary text-accent-foreground md:text-foreground md:bg-inherit': isActive,
        'text-muted-foreground hover:bg-muted hover:border-border hover:text-foreground border-transparent md:hover:bg-inherit':
          !isActive,
      }"
      @click="navigate"
    >
      <slot />
    </a>
  </NuxtLink>
</template>
