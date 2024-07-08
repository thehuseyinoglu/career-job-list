<template>
    <div class="bg-[#F8F9FA]">
        <div class="w-full h-14 bg-white  flex justify-center items-center shadow-lg">
            <img class=" cursor-pointer" @click="router.push('/')" src="~/assets/images/kariyer-logo.svg" width="200px" />
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">

const router= useRouter()

</script>
