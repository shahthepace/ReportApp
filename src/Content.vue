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
    /* background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNkLyeMrt5tv9dc_icYO_VYcNZ0g7Z1GJlw&usqp=CAU');  */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}
</style>
