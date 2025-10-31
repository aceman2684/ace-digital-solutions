<script setup lang="ts">
  import { vMaska } from "maska/vue";
  import * as z from "zod";

  const FormSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.email().nonempty("Email is required"),
    message: z.string().nonempty("Message is required").max(500, "Message must be less than 500 characters"),
  });

  const defaultFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeToTerms: false,
  };

  const defaultFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const formData = reactive({ ...defaultFormValues });
  const formErrors = reactive({ ...defaultFormErrors });
  const isSubmitting = ref(false);
  const submitStatus = ref<"idle" | "success" | "error">("idle");

  function resetForm(resetAgreement = true): void {
    const resetValues = { ...defaultFormValues };
    if (!resetAgreement) {
      resetValues.agreeToTerms = formData.agreeToTerms;
    }

    Object.assign(formData, resetValues);
  }

  function resetFormErrors(): void {
    Object.assign(formErrors, defaultFormErrors);
  }

  function isFieldInvalid(field: keyof typeof formErrors): boolean {
    return formErrors[field] !== "";
  }

  async function handleSubmit(e: SubmitEvent): Promise<void> {
    e.preventDefault();

    resetFormErrors();
    submitStatus.value = "idle";

    const result = FormSchema.safeParse({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    });

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof FormSchema.shape;
        formErrors[field] = issue.message;
      });

      return;
    }

    isSubmitting.value = true;

    const { error } = await useFetch("/api/contact", {
      method: "POST",
      body: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      } satisfies ContactRequestBody,
    });

    isSubmitting.value = false;

    if (error.value) {
      // Pop error toast
      submitStatus.value = "error";
      return;
    }

    // Pop toast
    submitStatus.value = "success";
    resetForm(false);
  }
</script>

<template>
  <main class="isolate px-6 pt-24 sm:pt-32 lg:px-8">
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
        class="to-primary relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#4115fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
      ></div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Let's Work Together</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Share your vision and we'll explore the best path forward together.</p>
    </div>
    <form novalidate class="mx-auto mt-16 max-w-xl sm:mt-20" @submit="handleSubmit">
      <UiFieldSet>
        <UiFieldGroup class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <UiField :data-invalid="isFieldInvalid('firstName')">
            <UiFieldLabel for="firstName" class="font-semibold">First Name</UiFieldLabel>
            <UiInput
              id="firstName"
              v-model="formData.firstName"
              type="text"
              name="firstName"
              autocomplete="given-name"
              class="bg-background"
              :aria-invalid="isFieldInvalid('firstName')"
            />
            <UiFieldError v-if="isFieldInvalid('firstName')">{{ formErrors.firstName }}</UiFieldError>
          </UiField>
          <UiField :data-invalid="isFieldInvalid('lastName')">
            <UiFieldLabel for="lastName" class="font-semibold">Last Name</UiFieldLabel>
            <UiInput
              id="lastName"
              v-model="formData.lastName"
              type="text"
              name="lastName"
              autocomplete="family-name"
              class="bg-background"
              :aria-invalid="isFieldInvalid('lastName')"
            />
            <UiFieldError v-if="isFieldInvalid('lastName')">{{ formErrors.lastName }}</UiFieldError>
          </UiField>
          <UiField class="sm:col-span-2" :data-invalid="isFieldInvalid('email')">
            <UiFieldLabel for="email" class="font-semibold">Email</UiFieldLabel>
            <UiInput
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              autocomplete="email"
              class="bg-background"
              :aria-invalid="isFieldInvalid('email')"
            />
            <UiFieldError v-if="isFieldInvalid('email')">{{ formErrors.email }}</UiFieldError>
          </UiField>
          <UiField class="sm:col-span-2">
            <div class="flex justify-between text-sm">
              <UiFieldLabel for="phoneNumber" class="font-semibold">Phone Number</UiFieldLabel>
              <span class="text-muted-foreground ml-auto font-normal">Optional</span>
            </div>
            <UiInput
              id="phoneNumber"
              v-model="formData.phoneNumber"
              v-maska="'+1 (###) ###-####'"
              type="tel"
              name="phoneNumber"
              autocomplete="tel"
              class="bg-background"
            />
          </UiField>
          <UiField class="sm:col-span-2" :data-invalid="isFieldInvalid('message')">
            <div class="flex justify-between text-sm">
              <UiFieldLabel for="message" class="font-semibold">Message</UiFieldLabel>
              <span class="text-muted-foreground ml-auto font-normal">Max 500 characters</span>
            </div>
            <UiTextarea
              id="message"
              v-model="formData.message"
              name="message"
              rows="4"
              maxcharacters="500"
              class="bg-background"
              :aria-invalid="isFieldInvalid('message')"
            />
            <UiFieldError v-if="isFieldInvalid('message')">{{ formErrors.message }}</UiFieldError>
          </UiField>
          <UiField orientation="horizontal" class="sm:col-span-2">
            <UiSwitch id="agreeToTerms" v-model="formData.agreeToTerms" name="agreeToTerms" />
            <UiFieldLabel for="agreeToTerms" class="text-muted-foreground gap-1">
              By selecting this, you agree to our
              <NuxtLink to="/privacy-policy" class="text-primary font-semibold text-nowrap"> privacy policy </NuxtLink>
            </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
      <div class="mt-10">
        <UiButton type="submit" class="w-full" size="lg" :disabled="!formData.agreeToTerms || isSubmitting">
          <template v-if="isSubmitting"><UiSpinner class="mr-2" /> Sending...</template>
          <template v-else>Send Message</template>
        </UiButton>
      </div>
    </form>
  </main>
</template>
