<template>
<div class="container">
    <div class="imgContainer" :style="{ backgroundImage: `url(${props.imgUrl})` }">

    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

.imgContainer {
    width: 100%;
    height: 20vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

}
</style>
