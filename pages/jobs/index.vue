<template>
    <div class="h-full w-full ">
        <div class="h-10 w-full bg-red-400 mb-10"> </div>

        <div class="container mx-auto  xl:px-20 2xl:-40 ">

            <n-grid cols="5" item-responsive>
                <n-grid-item span="0 600:1">
                    <div class=" flex justify-center items-center w-full p-2 ">
                        <FilterCard />
                    </div>
                </n-grid-item>
                <n-grid-item span="0:5 600:4 900:3 ">
                    <div class=" flex flex-col gap-6 justify-center items-center w-full p-2">
                        <JobCard v-for="(item, index) in paginatedItems" :key="index" :item="item" />

                    </div>
                    <div v-if="paginatedItems.length > 0"
                        class="flex flex-row  justify-center items-center gap-2 w-full shadow-sm p-4">
                        <n-button @click="prevPage" :disabled="currentPage === 1" round>
                            Önceki
                        </n-button>

                        <div>Sayfa {{ currentPage }} ... {{ totalPages }} </div>
                        <n-button @click="nextPage" :disabled="currentPage === totalPages" round>
                            Sonraki
                        </n-button>
                    </div>
                </n-grid-item>

                <n-grid-item span="0 900:1">
                    <div class=" flex justify-center items-center w-full">
                        yakında ilanlar gelcek
                    </div>
                </n-grid-item>
            </n-grid>
        </div>


    </div>
</template>

<script setup lang="ts">
import { NGrid, NGridItem, NButton } from 'naive-ui'
import JobCard from '~/components/jobs/JobCard.vue';
import FilterCard from '~/components/jobs/FilterCard.vue';
import { useJobStore } from '#imports';
import { useFilterStore } from "../../stores/FilterStore"


const jobStore = useJobStore()
const filterStore = useFilterStore()


const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(jobStore.jobs.length / itemsPerPage))

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return jobStore.jobs.slice(start, end)
})
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        scrollToTop()
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        scrollToTop()
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Düzgün bir kaydırma efekti için
    })
}

onMounted(async () => {
    try {
        jobStore.getJobs(filterStore.filter)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
})

</script>
