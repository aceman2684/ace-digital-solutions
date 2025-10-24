<template>
  <!-- Hero Section -->
  <div class="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
    <svg
      aria-hidden="true"
      class="absolute inset-0 -z-10 hidden size-full mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:block"
    >
      <defs>
        <pattern
          id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
          width="200"
          height="200"
          x="50%"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="0" class="overflow-visible fill-gray-50">
        <path
          d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect width="100%" height="100%" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" stroke-width="0" />
    </svg>
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
    >
      <div
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
        class="to-primary ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#4115fc]"
      ></div>
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
    >
      <div
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
        class="to-primary -ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#4115fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
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
