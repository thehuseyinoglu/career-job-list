<template>
    <div
        class="w-full md:w-[550px]  bg-gradient-to-r from-[#8316B5] to-[#C483E2] rounded-xl flex justify-start p-6 gap-4 flex-col">
        <span class="text-2xl text-white font-semibold">Find your dream job here!</span>
        <span class=" text-xs text-gray-300">Explore the latest job openings and apply for the best job opportunities
            available today!</span>

        <div>
            <Form class="flex flex-col md:flex-row gap-4 md:items-center" @submit="onSubmit">
                <TextInput class="w-full md:w-[200px]" name="keyword" type="text" placeholder="Unvan, yetenek" />
                <Field class="rounded-xl border-0 flex justify-center p-2 h-10 w-full md:w-[200px]" name="location"
                    as="select">
                    <option class=" text-gray-400" value="">
                       Şehir seçiniz
                    </option>
                    <option v-for="city in cities" :key="city.value" :value="city.value">
                        {{ city.name }}
                    </option>
                </Field>
                <n-button attr-type="submit" class="w-full md:w-[100px] rounded-lg h-10" color="#8316B5">
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

const router = useRouter()




const cities = ref([
    { name: 'New York', value: 'new-york' },
    { name: 'Los Angeles', value: 'los-angeles' },
    { name: 'Chicago', value: 'chicago' },
    { name: 'Houston', value: 'houston' },
    { name: 'Phoenix', value: 'phoenix' }
]);

const onSubmit = (values: any) => {
    console.log(values)
    router.push('/jobs')
}
</script>
