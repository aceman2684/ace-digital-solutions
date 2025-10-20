<template>
  <!-- Hero Section -->
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
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
        class="from-primary relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
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
              Learn more <span aria-hidden="true">→</span>
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
