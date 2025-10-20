<template>
  <!-- Hero Section -->
  <div class="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
    <svg
      aria-hidden="true"
      class="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect width="100%" height="100%" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" stroke-width="0" />
    </svg>
    <div
      aria-hidden="true"
      class="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
    >
      <div
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
        class="to-primary aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] opacity-20"
      ></div>
    </div>
    <div class="py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1
          class="text-foreground text-5xl font-semibold tracking-tight text-balance sm:mx-auto sm:max-w-4xl sm:text-7xl md:max-w-3xl lg:max-w-4xl"
        >
          Quality Solutions for Organizations That Matter
        </h1>
        <div class="mx-auto max-w-2xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <p class="text-muted-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            Helping startups, nonprofits, and churches build their digital presence with professional development, API
            integration, and full-stack support—without the enterprise price tag.
          </p>
          <div class="mt-10 flex items-center justify-center sm:gap-x-6">
            <UiButton as="a" href="/contact" size="lg">Let's Work Together</UiButton>
            <UiButton as="a" href="/about" variant="ghost" size="lg">
              Learn more <span aria-hidden="true">&rarr;</span>
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
