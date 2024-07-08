<template>

   <div class="container mx-auto  xl:px-20 2xl:-40 mt-10  h-screen ">

      <n-grid cols="6" :x-gap="24" :y-gap="8" item-responsive>
         <n-grid-item span="0:6 800:4 ">
            <div>
               <JobDetail />
            </div>
         </n-grid-item>
         <n-grid-item span="0:6  800:2 ">
            <div>
               <div class="flex p-4 border border-gray-300 rounded-md">
                  <div class="w-full flex flex-col justify-between gap-4 ">
                     <div class="flex justify-start items-center  gap-1">
                        <div class="h-12 w-12 flex justify-center rounded-full overflow-hidden">
                           <img class="h-full w-full object-cover":src="jobStore.jobDetail.imageUrl" alt="">
                        </div>

                        <div class="flex flex-col">
                           <span class="text-lg font-semibold">{{ jobStore.jobDetail.company }}</span>
                        </div>


                     </div>
                     <div class="flex flex-col gap-2">
                        <span class="font-semibold text-base">Hakkımızda</span>

                        <span>{{ jobStore.jobDetail.about_company }}</span>
                        <hr>
                        <span>{{ jobStore.jobDetail.phone_number }}</span>
                     </div>


                  </div>

               </div>
            </div>

         </n-grid-item>


      </n-grid>
   </div>
</template>

<script setup lang="ts">
import JobDetail from "~/components/jobs/JobDetail.vue"
import { NGrid, NGridItem } from 'naive-ui'


const jobStore = useJobStore()

const route = useRoute()

console.log('olay budur kardeş', jobStore.jobDetail)

onMounted(async () => {
   try {
      jobStore.getJobDetails(+route.params.id)
   } catch (error) {
      console.error('Error fetching data:', error)
   }
})
useHead({
   title: jobStore.jobDetail.title ? `${jobStore.jobDetail.title} - İş Detayları` : 'İş Detayları',
   meta: [
      {
         name: 'description',
         content: jobStore.jobDetail.description || 'İş detaylarını burada bulabilirsiniz.'
      },
      {
         name: 'author',
         content: jobStore.jobDetail.company || 'Şirket Adı'
      }
   ]
})


</script>
