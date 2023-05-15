<template>
  <div class="wrapper">
  
      <VueDraggableNext class="availableImagesContainer"   group="options" @change="methods.log">
  
          <div class="imgContainer" v-for="(item,index) in state.options">
              <Content  :imgUrl="item.imgUrl"/>
          </div>
  
      </VueDraggableNext>
  
      <VueDraggableNext  class="selectedImagesContainer"   group="options" v>
          <div class="imgContainer">
             
          </div>
          
      </VueDraggableNext>
  
  </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import Content from './Content.vue'
  import { VueDraggableNext} from 'vue-draggable-next'
  
  const state = reactive({
     options: [
          {
              type:'Facility',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU'
          },
          {
              type:"Product with Product Line",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcxm1tSJphluNimxurlape3Q9nhLcX3_apA&usqp=CAU'
  
          },
          {
              type:"Start Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU'
  
          },
          {
              type:"End Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU'
  
          },
          {
              type:"Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgOskp5NmQd_nhe6pRrYV9MfW9EQV4LanIQ&usqp=CAU'
  
          },
          {
              type:"View/Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthclFYuIWOp6jYTXBo21Mkc40CPGJ4qdTkErfy56hwlAajhkZcJlqNLVJpIU9n6lN7Zk&usqp=CAU'
  
          },  
      ],
      optionsSelected: [
          {
              type:'Facility',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU'
          },
          {
              type:"Product with Product Line",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcxm1tSJphluNimxurlape3Q9nhLcX3_apA&usqp=CAU'
  
          },
          {
              type:"Start Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU'
  
          },
          {
              type:"End Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU'
  
          },
          {
              type:"Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgOskp5NmQd_nhe6pRrYV9MfW9EQV4LanIQ&usqp=CAU'
  
          },
          {
              type:"View/Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthclFYuIWOp6jYTXBo21Mkc40CPGJ4qdTkErfy56hwlAajhkZcJlqNLVJpIU9n6lN7Zk&usqp=CAU'
  
          },  
      ],
      
  })
  
  const  options= [
          {
              type:'Facility',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU'
          },
          {
              type:"Product with Product Line",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcxm1tSJphluNimxurlape3Q9nhLcX3_apA&usqp=CAU'
  
          },
          {
              type:"Start Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU'
  
          },
          {
              type:"End Date",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU'
  
          },
          {
              type:"Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgOskp5NmQd_nhe6pRrYV9MfW9EQV4LanIQ&usqp=CAU'
  
          },
          {
              type:"View/Export",
              imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthclFYuIWOp6jYTXBo21Mkc40CPGJ4qdTkErfy56hwlAajhkZcJlqNLVJpIU9n6lN7Zk&usqp=CAU'
  
          },  
      ]
  
  const methods = {
    log: (event) => {
     alert(1)
    }
  }
  
  </script>
  
  <style scoped>
  .wrapper {
      width: 100vw;
      height: 100vh;
      margin: 50px;
      display: flex;
  }
  
  .availableImagesContainer,
  .selectedImagesContainer {
      width: 30vw;
      height: 80vh;
      background-color: #f1f1f1;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      margin: 20px;
  }
  
  .imgContainer {
      width: 100%;
      height: 15%;
      background-color: antiquewhite;
      margin-bottom: 10px;
  }
  </style>
  