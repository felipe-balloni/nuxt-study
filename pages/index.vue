<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h1 class="text-3xl font-bold underline">
      Hello world from Tailwind CSS!
    </h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>

<script setup lang="ts">
import AppAlert from "~/components/AppAlert.vue";
</script>