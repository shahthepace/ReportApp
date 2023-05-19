<template>
<div class="container" :style="{ backgroundImage: `url(${imgUrl})` }" >

    </div>

</template>

<script setup>
import {
    defineProps
} from 'vue';

const props = defineProps({
    imgUrl: {
        type: String
    }
})
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    object-fit: contain;
    
}

</style>
