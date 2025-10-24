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
      class="block border-l-4 py-3 pr-4 pl-3 text-base font-medium sm:pr-6 sm:pl-5 md:pb-0 lg:inline-flex lg:h-full lg:items-center lg:border-b-2 lg:border-l-0 lg:px-1 lg:pt-1 lg:text-sm"
      :class="{
        'bg-accent border-primary text-accent-foreground md:text-foreground lg:bg-inherit': isActive,
        'text-muted-foreground hover:bg-muted hover:border-border hover:text-foreground border-transparent lg:hover:bg-inherit':
          !isActive,
      }"
      @click="navigate"
    >
      <slot />
    </a>
  </NuxtLink>
</template>
