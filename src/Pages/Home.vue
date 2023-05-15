<template>
    <div>
        <h1>Home</h1>
        <p>{{state.text }}</p>
        {{ test  }}
    </div>
</template>

<script setup>
import { reactive,ref} from 'vue';


 const test = ref("test");
const state = reactive({
    text: 'Home',
});

</script>

<style  scoped>

</style>