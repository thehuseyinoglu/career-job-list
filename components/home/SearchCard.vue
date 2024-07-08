<template>
    <div
        class="w-full md:w-[550px]  bg-gradient-to-r from-[#8316B5] to-[#C483E2] rounded-xl flex justify-start p-6 gap-4 flex-col">
        <span class="text-2xl text-white font-semibold">Find your dream job here!</span>
        <span class=" text-xs text-gray-300">Explore the latest job openings and apply for the best job opportunities
            available today!</span>

        <div>
            <Form class="flex flex-col md:flex-row gap-4 md:items-center" @submit="onSubmit">
                <TextInput class="w-full md:w-[200px]" name="keyword" type="text" placeholder="Unvan, yetenek" />
                <TextInput class="w-full md:w-[200px]" name="location" type="text" placeholder="Ülke,Şehir" />

                <n-button attr-type="submit" class="w-full md:w-[80px] rounded-lg h-10" color="#8316B5">
                    Ara
                </n-button>
            </Form>
        </div>

    </div>
</template>
<script setup lang="ts">
import TextInput from '../shared/TextInput.vue';
import { Form, Field } from 'vee-validate';
import { NButton } from 'naive-ui';
import { useFilterStore } from "../../stores/FilterStore"
import { useJobStore } from '~/stores/JobStore';

const router = useRouter()
const filterStore = useFilterStore()
const jobStore = useJobStore()


console.log(jobStore.jobs)

const onSubmit = async (values: any) => {
    try {
        filterStore.setFilter(values)
        router.push('/jobs')
    } catch (error) {
        console.log(error)
    }

}
</script>
