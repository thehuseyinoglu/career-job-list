<template>
    <div class="h-full w-full bg-slate-400">
        <div class="h-10 w-full bg-red-400 mb-10">  </div>

            <div class="container mx-auto">

                <n-grid cols="5" item-responsive>
                <n-grid-item span="0 600:1">
                    <div class=" flex justify-center items-center w-full">
                        filter
                    </div>
                </n-grid-item>
                <n-grid-item span="0:5 600:4 900:3 ">
                    <div class=" flex justify-center items-center w-full">

                        <JobCard/>
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
import { NGrid, NGridItem } from 'naive-ui'
import JobCard from '~/components/jobs/JobCard.vue';

</script>
