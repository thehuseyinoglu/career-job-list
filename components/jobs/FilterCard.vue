<template>
    <div class="bg-white w-full rounded-lg flex flex-col gap-3 p-4 shadow-md">
        <div class="flex justify-between items-center">
            <span class="text-base font-bold">Filtre</span>
            <span class="text-xs text-blue-400">Temizle</span>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Maaş</span>

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
            <span class="text-sm font-semibold">Çalışma Şekli</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="Ofisten" label="Ofisten" />
                    <n-checkbox value="Hibrit" label="Hibrit" />
                    <n-checkbox value="Uzaktan" label="Uzaktan" />
                </n-space>
            </n-checkbox-group>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">Deneyim Seviyesi</span>
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
            <span class="text-sm font-semibold">Sektör</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="Junior" label="Yazılım" />
                    <n-checkbox value="Mid" label="Mimarlık" />
                    <n-checkbox value="Sağlık" label="Sağlık" />
                    <n-checkbox value="Hizmet" label="Hizmet" />
                    <n-checkbox value="Eğitim" label="Eğitim" />
                </n-space>
            </n-checkbox-group>
        </div>
        <hr>
        <div class="flex justify-start gap-2 flex-col">
            <span class="text-sm font-semibold">İlan Özellikleri</span>
            <n-checkbox-group>
                <n-space class="flex flex-col gap-1" item-style="display: flex; flex-direction:col">
                    <n-checkbox value="Junior" label="Sana Uygun İlanlar" />
                    <n-checkbox value="Mid" label="Takip Ettiğin İlanlar" />
                    <n-checkbox value="Sağlık" label="İncelediğin İlanlar" />
                    <n-checkbox value="Hizmet" label="Başvurduğun İlanlar" />
                    <n-checkbox value="Eğitim" label="Kaydettiğin İlanlar" />
                </n-space>
            </n-checkbox-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NCheckboxGroup, NCheckbox, NSlider } from 'naive-ui';

const value = ref([0, 100000])


</script>
