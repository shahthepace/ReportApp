<template>
<div>
    <h1>App</h1>
    <div class="wrapper">
        <div class="contentsContainer" @change="methods.log">
            <VueDraggableNext group="grp" :list="state.data">
                <div class="contentContainer" v-for="(data,index) in state.data">
                    <Content :imgUrl="data.imgUrl" />
                </div>
            </VueDraggableNext>
        </div>
        <div class="contentsContainer" @change="methods.log">
            <VueDraggableNext group="grp" :list="state.selected">
                <div class="contentContainer" v-for="(data,index) in state.selected">
                    <Content :imgUrl="data.imgUrl" />
                </div>
            </VueDraggableNext>

        </div>
        <div class="contentsContainer">
            <div v-for="(item,index) in state.selected" :key="index">
                <p>{{item.code}}</p>
            </div>

        </div>

    </div>
</div>
</template>

<script setup>
import {
    reactive
} from 'vue';

import {
    VueDraggableNext
} from 'vue-draggable-next'

import Content from './Content.vue';

const state = reactive({
    data: [{
            id: 1,
            type: "Facility",
            imgUrl: "https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            code: `<note>
                    <to>Tove</to>
                    <from>Jani</from>
                    <heading>Reminder</heading>
                    <body>Don't forget me this weekend!</body>`
        },
        {
            id: 2,
            type: "Multiple_Products",
            imgUrl: "https://plus.unsplash.com/premium_photo-1683880731495-ae0f4bf18c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            code: "<div>This is code for Multiple_Products</div>"
        },
        {
            id: 3,
            type: "FromDate",
            imgUrl: "https://images.unsplash.com/photo-1684093025993-dcb8dec5625e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1660&q=80",
            code: "<div>This is code for FromDate</div>"
        },
        {
            id: 4,
            type: "ToDate",
            imgUrl: "https://plus.unsplash.com/premium_photo-1671485196355-32005a27fd02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            code: "<div>This is code for ToDate</div>"
        },
        {
            id: 5,
            type: "ShouldExport",
            imgUrl: "https://images.unsplash.com/photo-1684093024940-7847c7af3faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1763&q=80",
            code: "<div>This is code for ShouldExport</div>"
        },
        {
            id: 6,
            type: "ViewOptions",
            imgUrl: "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            code: "<div>This is code for ViewOptions</div>"
        }
    ],
    selected: []
})

const methods = {
    log(event) {

    }
}
</script>

<style scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
}

.contentsContainer {
    width: 30vw;
    height: 100%;
    border: 1px solid black;
    background: burlywood;
    overflow-y: scroll;
}

.contentContainer {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
</style>
