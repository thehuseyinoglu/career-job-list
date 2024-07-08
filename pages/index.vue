<template>
    <div class=" w-full flex justify-center items-center bg-white">

        <div class="flex justify-center items-center gap-5 mt-10 p-2 md:p-4 relative">

            <div class="flex items-center justify-start flex-col w-full md:w-[450px] gap-5 md:gap-10 z-20">
                <span class=" font-bold text-4xl md:text-[52px] leading-[50px]">Find a dream job that changes
                    life.</span>
                <span>With lots of unique blocks, you can easily built a page without coding. Build your next job
                    website</span>
                <SearchCard />
            </div>

            <img class="z-10 absolute opacity-20 lg:opacity-100 lg:relative" src="~/assets/images/new-job.jpg"
                width="600px" alt="yeni is">
        </div>

    </div>
</template>
<script setup>
import SearchCard from '~/components/home/SearchCard.vue';


</script>
