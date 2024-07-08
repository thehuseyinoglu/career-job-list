<template>
    <div class="flex item-center justify-center w-full  p-2 flex-row gap-4 ">
        <Form class="flex flex-col md:flex-row gap-4 md:items-center" @submit="onSubmit">
                <TextInput class="w-full md:w-[200px] border border-gray-400" name="keyword" type="text" placeholder="Pozisyon veya şirket ara" />
                <TextInput class="w-full md:w-[200px] border border-gray-400" name="location" type="text" placeholder="Ülke,Şehir" />

                <n-button attr-type="submit" class="w-full md:w-[80px] rounded-lg h-10" color="#8316B5">
                    Ara
                </n-button>
            </Form>
    </div>
</template>

<script setup lang="ts">
import TextInput from '../shared/TextInput.vue';
import { Form } from 'vee-validate';
import { NButton } from 'naive-ui';
import { useFilterStore } from "../../stores/FilterStore"

const filterStore = useFilterStore()
const jobStore = useJobStore()


const onSubmit = async (values: any) => {
    try {
        filterStore.setFilter(values)
        jobStore.getJobs(values)
        
    } catch (error) {
        console.log(error)
    }

}
</script>

<style scoped></style>