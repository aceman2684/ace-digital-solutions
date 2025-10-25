<script setup lang="ts">
  const processItems = [
    {
      icon: "mdi:magnify",
      title: "Discovery",
      description:
        "Your goals, challenges, and vision come first. This ensures you get a solution that actually fits your needs, not a one-size-fits-all approach.",
    },
    {
      icon: "mdi:design",
      title: "Design & Planning",
      description:
        "The technical approach, user experience, and project timeline get mapped out in detail. You'll know exactly what to expect before a single line of code is written.",
    },
    {
      icon: "mdi:code",
      title: "Development",
      description:
        "Love regular demos and staying involved throughout? Prefer to check in at key milestones? You'll get the collaboration style that makes sense for you and your team.",
    },
    {
      icon: "mdi:rocket-launch",
      title: "Testing & Launch",
      description:
        "Everything goes through rigorous testing to ensure it works flawlessly. Then deployment is handled smoothly so you're confident using your new solution.",
    },
    {
      icon: "mdi:wrench",
      title: "Support & Growth",
      description:
        "Launch is just the beginning. You'll get ongoing support, performance monitoring, and help evolving the solution as your needs change.",
    },
  ];
</script>

<template>
  <main class="isolate">
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
              Helping startups, nonprofits, and mission-driven organizations build their digital presence with
              professional development, API integration, and full-stack support. No enterprise price tag required.
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
      <div class="from-background absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t sm:h-32"></div>
    </div>

    <!-- What We Do Section -->
    <div class="bg-background flex overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:ml-auto lg:pt-4 lg:pl-4">
            <div class="lg:max-w-lg">
              <h2 class="text-primary text-base/7 font-semibold">What You Get</h2>
              <p class="text-foreground mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Technical Excellence Made Accessible
              </p>
              <p class="text-muted-foreground mt-6 text-lg/8">
                Custom web development, API integrations, and ongoing support with transparent pricing that puts you
                first.
              </p>
              <dl class="text-muted-foreground mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                <div class="relative pl-9">
                  <dt class="text-foreground inline font-semibold">
                    <Icon
                      size="1.25rem"
                      name="mdi:internet"
                      class="text-primary absolute top-1 left-1 size-5"
                      aria-hidden="true"
                    />
                    From landing pages to full web applications.
                  </dt>
                  <dd class="inline">Modern, responsive websites built with the latest technologies.</dd>
                </div>
                <div class="relative pl-9">
                  <dt class="text-foreground inline font-semibold">
                    <Icon
                      name="mdi:puzzle"
                      size="1.25rem"
                      class="text-primary absolute top-1 left-1 size-5"
                      aria-hidden="true"
                    />
                    API integration and third-party connections.
                  </dt>
                  <dd class="inline">
                    Connect payment processors, CRMs, email services, and other tools your business needs.
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt class="text-foreground inline font-semibold">
                    <Icon
                      name="mdi:shield"
                      size="1.25rem"
                      class="text-primary absolute top-1 left-1 size-5"
                      aria-hidden="true"
                    />
                    Ongoing technical partnership for your digital presence.
                  </dt>
                  <dd class="inline">Keep your site secure, fast, and up-to-date.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-center justify-end lg:order-first">
            <NuxtImg
              width="2432"
              height="1442"
              src="/images/mru-screenshot.png"
              alt="Modern responsive website dashboard showing analytics and user interface on desktop and mobile devices"
              class="ring-ring/20 h-full w-3xl max-w-none rounded-xl ring-1 drop-shadow-xl/15 sm:w-228"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <div class="isolate mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-primary text-base/7 font-semibold">How It Works</h2>
        <p class="text-foreground mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
          A Clear Path from Idea to Launch
        </p>
        <p class="text-muted-foreground mt-6 text-lg/8">
          Every project is different, but the approach stays consistent: collaborative, transparent, and focused on
          delivering real value at every stage.
        </p>
      </div>
      <div class="col-span-2 mx-auto mt-16">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <ProcessItem
            v-for="(item, index) in processItems"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            :class="{ 'lg:ml-2': index !== 0 }"
          />
        </div>
      </div>
    </div>

    <!-- Why Us Section -->
    <div class="mt-32 overflow-hidden sm:mt-40">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8"
        >
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 class="text-primary text-base/7 font-semibold">Why Pick Us</h2>
            <h2 class="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">Mission Over Margin</h2>
            <p class="text-muted-foreground mt-6 text-xl/8">
              Mission-driven communities, growing startups, nonprofits making real change. Every organization deserves a
              digital presence that reflects their purpose, not their budget.
            </p>
            <p class="text-muted-foreground mt-6 text-base/7">
              This work didn't start to chase enterprise contracts or maximize billable hours. It started because
              quality development shouldn't be reserved for Fortune 500 companies. Feeding families, building community,
              launching your first product. When you partner here, you're working with someone who believes that helping
              your organization succeed matters more than any profit margin.
            </p>
          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                alt=""
                class="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
              />
            </div>
            <div
              class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8"
            >
              <div class="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  class="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <NuxtImg
                  src="/images/team-at-table.jpg"
                  alt="Team collaborating around a table"
                  class="aspect-7/5 w-148 max-w-none flex-none rounded-2xl object-cover max-sm:w-120"
                />
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <NuxtImg
                  src="/images/helping-hands.jpg"
                  class="aspect-4/3 w-[24rem] max-w-none rounded-2xl object-cover"
                  alt="People with joined hands in a show of teamwork and collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
