<template>
    <div class="bg-white w-full border border-gray-300 flex flex-col  gap-4 rounded-md p-4">
        <div class="w-full flex justify-between items-center">
            <div class="flex justify-start  gap-10">
                
                <div class="flex flex-row gap-4">
                    <div class="flex flex-col">
                        <span class="text-lg font-semibold">{{ jobStore.jobDetail.title }}</span>
                        <span class="text-sm text-gray-400">{{ jobStore.jobDetail.company }}</span>
                    </div>
                    <div v-if="jobStore.jobDetail.isNew"
                        class="w-10 h-5 bg-green-500 rounded-lg flex mt-1 justify-center items-center text-sm text-white">
                        Yeni
                    </div>
                </div>
            </div>
           <div class="flex flex-row gap-4">
            <n-button class="md:w-[100px] rounded-lg h-10" color="#8316B5">
                Başvur
            </n-button>
            <n-button class="md:w-[100px] rounded-lg h-10" type="tertiary">
                Kaydet
            </n-button>
           </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex flex-row gap-2">
                <div class=" flex flex-row gap-1 justify-center items-center font-semibold text-xs">
                    <img src="~/assets/images/clock.svg" width="16" alt="">
                    Tam Zamanlı
                </div>
                <n-divider vertical />
                <div class=" flex flex-row gap-1 justify-center items-center font-semibold text-xs"><img
                        src="~/assets/images/check.svg" width="16" alt="">Senior</div>
                <n-divider vertical />
                <div class=" flex flex-row gap-1 justify-center items-center ont-semibold text-xs"><img
                        src="~/assets/images/location.svg" width="16" alt="">{{ jobStore.jobDetail.country_name }}</div>
            </div>
            <span class=" text-gray-400">{{ jobStore.jobDetail.creative_time?.split('T')[0] }}</span>
        </div>

        <div class="flex flex-col ">
            <span class="font-bold text-lg">GENEL NİTELİKLER VE İŞ TANIMI
            </span><br>
            {{ jobStore.jobDetail.description }}
        </div>
        <hr class=" my-2">
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center justify-start gap-4">
                <div class=" flex flex-row gap-3 justify-center items-center font-semibold text-base"><img
                        src="~/assets/images/briefcase.svg" width="24" alt="">{{ jobStore.jobDetail.job_type }}</div>
                <n-divider vertical />
                <div class=" flex flex-row gap-3 justify-center items-center ont-semibold text-base"><img
                        src="~/assets/images/users.svg" width="24" alt="">{{ jobStore.jobDetail.apply_count }} Başvuru
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import { useJobStore } from "../../stores/JobStore";
import { NButton } from 'naive-ui'



const jobStore = useJobStore()

</script>

<style scoped></style>