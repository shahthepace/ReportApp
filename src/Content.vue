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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgb(240, 201, 201);
    object-fit: cover;
    
}

</style>
