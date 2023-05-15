<template>
    <div>
        <h1>About</h1>
        <h1>viewing about {{ this.$route.params.username }}</h1>
        <button @click="$router.push('/home')">Go Home</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>