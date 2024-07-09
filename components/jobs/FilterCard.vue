<template>
    <div class="bg-white w-full rounded-lg flex flex-col gap-3 p-4 shadow-md">
        <div class="flex justify-between items-center">
            <span class="text-base font-bold">Filter</span>
            <span class="text-xs text-blue-400">Clear All</span>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Salary</span>

            <n-slider v-model:value="value" range :min="17000" :max="50000" />
            <div class="w-full flex text-xs justify-between item-center flex-row">
                <span>
                    17.000₺
                </span>
                <span>
                    60.000₺
                </span>
            </div>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Work Type</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="office" label="Office" />
                    <n-checkbox value="hybrid" label="Hybrid" />
                    <n-checkbox value="remote" label="Remote" />
                </n-space>
            </n-checkbox-group>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Experience Level</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="Junior" label="Junior" />
                    <n-checkbox value="Mid" label="Mid" />
                    <n-checkbox value="Senior" label="Senior" />
                </n-space>
            </n-checkbox-group>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Sector</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="Junior" label="Software" />
                    <n-checkbox value="Mid" label="Architecture" />
                    <n-checkbox value="Health" label="Health" />
                    <n-checkbox value="Service" label="Service" />
                    <n-checkbox value="Education" label="Education" />
                </n-space>
            </n-checkbox-group>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Job Features</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction: col">
                    <n-checkbox value="Junior" label="Jobs Suitable for You" />
                    <n-checkbox value="Mid" label="Jobs You Followed" />
                    <n-checkbox value="Health" label="Jobs You Reviewed" />
                    <n-checkbox value="Service" label="Jobs You Applied For" />
                    <n-checkbox value="Education" label="Jobs You Saved" />
                </n-space>
            </n-checkbox-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NCheckboxGroup, NCheckbox, NSlider } from 'naive-ui';

const value = ref([0, 60000])


</script>
