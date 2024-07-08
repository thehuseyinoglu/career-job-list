<template>
    <div class="bg-white w-full shadow-md flex flex-col  gap-4  rounded-xl p-4">
        <div class="flex justify-start  gap-10">
            <div class="h-12 w-12 bg-red-400 flex justify-center rounded-full">
                <img src="~/assets/images/new-job.jpg" alt="">
            </div>
            <div class="flex flex-row gap-4">
                <div class="flex flex-col">
                    <span class="text-lg font-semibold">Frontend Developer</span>
                    <span class="text-sm text-gray-400">Kariyer.net</span>
                </div>
                <div class="w-10 h-5 bg-green-500 rounded-lg flex mt-1 justify-center items-center text-sm text-white">
                    Yeni
                </div>
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
                    src="~/assets/images/location.svg" width="16" alt="">İstanbul</div>
        </div>
        <span class=" text-gray-400">24.07.2024</span>
        </div>

        <div class="clamp-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididuntut labore et dolore
            magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco
        </div>
      <hr class=" my-2">
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center justify-start gap-4">
                <div class=" flex flex-row gap-3 justify-center items-center font-semibold text-base"><img
                    src="~/assets/images/briefcase.svg" width="24" alt="">Hibrit</div>
            <n-divider vertical  />
            <div class=" flex flex-row gap-3 justify-center items-center ont-semibold text-base"><img
                    src="~/assets/images/users.svg" width="24" alt="">49 Başvuru</div>
            </div>

            <n-button attr-type="submit" class="md:w-[100px] rounded-lg h-10" color="#8316B5">
                Başvur
            </n-button>
        </div>
    </div>
</template>





<script setup lang="ts">
import { NDivider } from 'naive-ui';
import { NButton } from 'naive-ui';


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
