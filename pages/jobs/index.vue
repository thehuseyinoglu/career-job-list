<template>

    <div class="h-full w-full ">
        <div class="h-10 w-full   mb-10">

            <JobsPageFilter />
        </div>

        <div class="container mx-auto  xl:px-20 2xl:-40 ">

            <n-grid cols="5" item-responsive>
                <n-grid-item span="0 600:1">
                    <div class=" flex justify-center items-center w-full p-2 ">
                        <FilterCard />
                    </div>
                </n-grid-item>
                <n-grid-item span="0:5 600:4 900:3 ">
                    <div v-if="!jobStore.loading" class=" flex flex-col gap-6 justify-center items-center w-full p-2">

                        <JobCard v-if="paginatedItems" v-for="(item, index) in paginatedItems" :key="index"
                            :item="item" />

                    </div>
                    <div v-else class="w-full  flex justify-center items-center"> <n-spin size="medium" /> </div>
                    <div v-if="paginatedItems.length > 0"
                        class="flex flex-row  justify-center items-center gap-2 w-full shadow-sm p-4">
                        <n-button @click="prevPage" :disabled="currentPage === 1" round>
                            Previous
                        </n-button>

                        <div>Sayfa {{ currentPage }} ... {{ totalPages }} </div>
                        <n-button @click="nextPage" :disabled="currentPage === totalPages" round>
                            Next
                        </n-button>
                    </div>
                </n-grid-item>

                <n-grid-item span="0 900:1">

                    <div class=" flex justify-center items-center w-full p-2 ">
                        <Advert />
                    </div>
                </n-grid-item>
            </n-grid>

        </div>

    </div>
</template>

<script setup lang="ts">
import { NGrid, NGridItem, NButton, NSpin } from 'naive-ui'
import JobCard from '~/components/jobs/JobCard.vue';
import FilterCard from '~/components/jobs/FilterCard.vue';
import { useJobStore } from "../../stores/JobStore";
import { useFilterStore } from "../../stores/FilterStore"
import Advert from "~/components/jobs/Advert.vue"
import { useMessage } from 'naive-ui'



const jobStore = useJobStore()
const filterStore = useFilterStore()

const message = useMessage();



useHead({
    title: 'İş İlanları - En Güncel İş Fırsatları',
    meta: [
        {
            name: 'description',
            content: 'En güncel iş ilanlarını burada bulabilirsiniz. Hemen başvurun ve kariyerinizde yeni bir adım atın.'
        },
        {
            name: 'keywords',
            content: 'iş ilanları, kariyer, iş bulma, iş başvurusu'
        },
        {
            name: 'author',
            content: 'Şirket Adı'
        }
    ]
})

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
watch(
  () => jobStore.error,
  (newError) => {
    if (newError) {
      message.error(`An error occurred: ${newError.message}`);
    }
  }
);

onMounted(async () => {
    try {
        jobStore.getJobs(filterStore.filter)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
})


</script>
