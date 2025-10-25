<script setup lang="ts">
  defineProps<{
    question: string;
    answer: string;
  }>();

  const expanded = ref(false);
  const uniqueId = Math.random().toString(36).substring(2, 9);
  const contentId = `faq-content-${uniqueId}`;
  const buttonId = `faq-button-${uniqueId}`;

  function toggle() {
    expanded.value = !expanded.value;
  }

  function onEnter(el: Element) {
    const element = el as HTMLElement;
    element.style.height = "0";
    void element.offsetHeight; // force reflow
    element.style.height = element.scrollHeight + "px";
  }

  function onAfterEnter(el: Element) {
    const element = el as HTMLElement;
    element.style.height = "auto";
  }

  function onLeave(el: Element) {
    const element = el as HTMLElement;
    element.style.height = element.scrollHeight + "px";
    void element.offsetHeight; // force reflow
    element.style.height = "0";
  }
</script>

<template>
  <div class="first:pt-0">
    <dt>
      <button
        :id="buttonId"
        type="button"
        class="text-foreground flex w-full cursor-pointer items-start justify-between py-6 text-left"
        :aria-expanded="expanded"
        :aria-controls="contentId"
        @click="toggle"
      >
        <span class="text-base/7 font-semibold">
          {{ question }}
        </span>
        <span class="ml-6 flex h-7 items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            data-slot="icon"
            aria-hidden="true"
            class="size-6 in-aria-expanded:hidden"
          >
            <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            data-slot="icon"
            aria-hidden="true"
            class="size-6 not-in-aria-expanded:hidden"
          >
            <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </button>
    </dt>
    <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
      <div
        v-show="expanded"
        :id="contentId"
        class="overflow-hidden transition-all duration-300 ease-out"
        role="region"
        :aria-labelledby="buttonId"
      >
        <dd class="mt-2 mb-6 pr-12">
          <p class="text-muted-foreground text-base/7">
            {{ answer }}
          </p>
        </dd>
      </div>
    </Transition>
  </div>
</template>
