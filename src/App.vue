<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Поиск квартир в Астане</h1>
    <Filters v-model="filters" />
    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <ApartmentCard
        v-for="apt in filteredApartments"
        :key="apt.id"
        :apartment="apt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import Filters from "../src/components/Filters.vue"
import ApartmentCard from "../src/components/ApartmentCard.vue"
import type { Apartment } from "./types/apartment"
import type { MenuFilters } from "./types/filter"
import { getRandomImages } from "./services/unsplash"

const apartments = ref<Apartment[]>([])

const filters = ref<MenuFilters>({
  areaFrom: null,
  areaTo: null,
  roomsFrom: null,
  roomsTo: null,
  search: ""
})

onMounted(async () => {
  const res = await fetch("/apartments.json")
  const data: Apartment[] = await res.json()

  const images = await getRandomImages(data.length)

  apartments.value = data.map((apt, idx) => ({
    ...apt,
    image: images[idx] || "https://via.placeholder.com/400x300"
  }))
})

const filteredApartments = computed(() =>
  apartments.value.filter((apt) => {
    const f = filters.value
    const areaFromOk = !f.areaFrom || apt.area >= f.areaFrom
    const areaToOk = !f.areaTo || apt.area <= f.areaTo
    const roomsFromOk = !f.roomsFrom || apt.rooms >= f.roomsFrom
    const roomsToOk = !f.roomsTo || apt.rooms <= f.roomsTo
    const searchOk =
      !f.search || apt.address.toLowerCase().includes(f.search.toLowerCase())

    return areaFromOk && areaToOk && roomsFromOk && roomsToOk && searchOk
  })
)
</script>
