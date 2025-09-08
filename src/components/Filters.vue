<template>
  <div class="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-100 rounded-xl">
    <InputText 
      v-model="localFilters.search" 
      placeholder="Адрес" 
      class="w-full md:w-1/3"
    />

    <InputNumber 
      v-model="localFilters.areaFrom" 
      placeholder="Площадь от" 
      inputClass="w-full"
      class="w-full md:w-40"
    />

    <InputNumber 
      v-model="localFilters.areaTo" 
      placeholder="Площадь до" 
      inputClass="w-full"
      class="w-full md:w-40"
    />

    <InputNumber 
      v-model="localFilters.roomsFrom" 
      placeholder="Комнат от" 
      inputClass="w-full"
      class="w-full md:w-40"
    />

    <InputNumber 
      v-model="localFilters.roomsTo" 
      placeholder="Комнат до" 
      inputClass="w-full"
      class="w-full md:w-40"
    />


    <Button 
      label="Найти" 
      @click="applyFilters" 
      class="w-full md:w-auto" 
      severity="success"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import InputNumber from "primevue/inputnumber"
import InputText from "primevue/inputtext"
import Button from "primevue/button"

const model = defineModel<{
  areaFrom: number | null
  areaTo: number | null
  roomsFrom: number | null
  roomsTo: number | null
  search: string
}>({ required: true })

const localFilters = reactive({ ...model.value })

function applyFilters() {
  model.value = { ...localFilters }
}
</script>
