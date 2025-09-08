<template>
    <div class="rounded-2xl shadow p-4 bg-white">
      <img :src="apartment.image" alt="apartment" class="w-full h-48 object-cover rounded-xl mb-3" referrerpolicy="no-referrer"/>
      <h3 class="text-lg font-bold">{{ apartment.rooms }} комн. • {{ apartment.area }} м²</h3>
      <p class="text-gray-600">{{ apartment.address }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Apartment } from "../types/apartment"
  
  defineProps<{ apartment: Apartment }>()
  </script>
  