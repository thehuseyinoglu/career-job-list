<template>
    <div class=" w-full   flex justify-center items-center">

        <div class="flex justify-center items-center gap-5 mt-10 p-4">

            <div class="flex items-center justify-start flex-col w-[450px] gap-10 z-20">
                <span class=" font-bold text-[52px] leading-[50px]">Find a dream job that changes life.</span>
                <span>With lots of unique blocks, you can easily built a page without coding. Build your next job
                    website</span>
                <SearchCard />
            </div>



            <img class="z-10" src="~/assets/images/new-job.jpg" width="500px" alt="yeni is">
        </div>
    </div>
</template>
<script setup>
import SearchCard from '~/components/home/SearchCard.vue';


</script>
