<script setup lang="ts">
  const { icon, title, description } = defineProps<{
    icon: string;
    title: string;
    description: string;
  }>();
</script>

<template>
  <div class="text-pretty">
    <div class="flex items-center lg:not-first:ml-8">
      <div class="bg-primary text-background flex items-center justify-center rounded-full p-1.5" aria-hidden="true">
        <Icon :name="icon" size="1.25rem" class="flex-none" aria-hidden="true" />
      </div>
      <div
        aria-hidden="true"
        class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-4 lg:w-auto lg:flex-auto lg:translate-x-0"
      ></div>
    </div>

    <p class="text-foreground mt-6 text-lg/8 font-semibold tracking-tight">{{ title }}</p>
    <p class="text-muted-foreground mt-1 text-base/7">
      {{ description }}
    </p>
  </div>
</template>
