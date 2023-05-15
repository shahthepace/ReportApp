<template>
<div>
    <h1>App</h1>
    <div class="test">
        <Content imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdawNbsRR2a2JlkPqyPjB7lkq8bgYrqT1OA&usqp=CAU" />
    </div>
    <div class="wrapper">
        <div class="contentsContainer">
            <div class="contentContainer">
                <Content imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdawNbsRR2a2JlkPqyPjB7lkq8bgYrqT1OA&usqp=CAU" />
            </div>

        </div>

        <!-- <div class="selectedContentsContainer">
        <div class="selectedContentContainer">
            <div>asd</div>
            <div>asd</div>
        </div>
    </div> -->
    </div>
</div>
</template>

<script>
import Content from './Content.vue'
import {
    VueDraggableNext
} from 'vue-draggable-next'
</script>

<style scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}

.contentsContainer {
    width: 30vw;
    height: 80vh;
    border: 1px solid red;
    display: flex;
    overflow: scroll;
    background-color: aliceblue;
}

.contentContainer {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: antiquewhite;
    flex: 1;
}
</style>
