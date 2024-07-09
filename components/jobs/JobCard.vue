<template>
    <div class="bg-white w-full shadow-md flex flex-col  gap-4  rounded-xl p-4">
        <div class="flex justify-start  gap-10">
            <div class="h-12 w-12  flex overflow-hidden justify-center rounded-full">
                <img :src="item.imageUrl" alt="">
            </div>
            <div class="flex flex-row gap-4">
                <div class="flex flex-col">
                    <span class="text-lg font-semibold">{{ item.title }}</span>
                    <span class="text-sm text-gray-400">{{ item.company }}</span>
                </div>
                <div v-if="item.isNew"
                    class="w-10 h-5 bg-green-500 rounded-lg flex mt-1 justify-center items-center text-sm text-white">
                    New
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex flex-row gap-2">
                <div class=" flex flex-row gap-1 justify-center items-center font-semibold text-xs">
                    <img src="~/assets/images/clock.svg" width="16" alt="">
                   Fulltime
                </div>
                <n-divider vertical />
                <div class=" flex flex-row gap-1 justify-center items-center font-semibold text-xs"><img
                        src="~/assets/images/check.svg" width="16" alt="">Senior</div>
                <n-divider vertical />
                <div class=" flex flex-row gap-1 justify-center items-center ont-semibold text-xs"><img
                        src="~/assets/images/location.svg" width="16" alt="">{{ item.country_name }}</div>
            </div>
            <span class=" text-gray-400">{{ item.creative_time?.split('T')[0] }}</span>
        </div>

        <div class="clamp-text">
            {{ item.description }}
        </div>
        <hr class=" my-2">
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center justify-start gap-4">
                <div class=" flex flex-row gap-3 justify-center items-center font-semibold text-base"><img
                        src="~/assets/images/briefcase.svg" width="24" alt="">{{ item.job_type }}</div>
                <n-divider vertical />
                <div class=" flex flex-row gap-3 justify-center items-center ont-semibold text-base"><img
                        src="~/assets/images/users.svg" width="24" alt="">{{ item.apply_count }} Apply</div>
            </div>

            <n-button @click="router.push(`/jobs/${item.id}`)" attr-type="submit" class="md:w-[100px] rounded-lg h-10"
                color="#8316B5">
                Apply
            </n-button>
        </div>
    </div>
</template>





<script setup lang="ts">
import { NDivider, NButton } from 'naive-ui';
import { type JobModel } from '~/models/job-model';

const router = useRouter()

const props = defineProps<{ item: JobModel }>()



</script>

<style>
.clamp-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
