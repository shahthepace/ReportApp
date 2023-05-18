<template>
    <div class="imgContainer" :style="{ backgroundImage: `url(${props.imgUrl})` }">
        
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
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    object-fit: contain;
    
}

</style>
