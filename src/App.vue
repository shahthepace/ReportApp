<template>
<div>
    <h1>App</h1>
    <div class="wrapper">
        <div class="container">
            <div class="label-allDraggable">
                <label >Drag all the contents from here</label>
            </div>
        <div class="contentsContainer" @change="methods.log">
            <VueDraggableNext group="grp" :list="state.data">
                <div class="contentContainer" v-for="(data,index) in state.data">
                    <Content :imgUrl="data.imgUrl" />
                </div>
            </VueDraggableNext>
        </div>
    </div>
        <div class="container">
            <div class="drag">
                <label >Drop the content here [----]</label>
            </div>
        <div class="contentsContainer" @change="methods.log">
           
            <VueDraggableNext group="grp" :list="state.selected">
                <div class="contentContainer" v-for="(data,index) in state.selected">
                    <Content :imgUrl="data.imgUrl" />
                </div>
            </VueDraggableNext>

        </div>
    </div>
        <div class="container">
            <div class="beautify">
                <a href="https://jsonformatter.org/xml-formatter" target="_blank" style="color: #007bff; text-decoration: none; font-weight: bold; border-bottom: 2px solid #007bff;">Beautify</a>
            </div>
            <!-- a copy button that copies the code inside -->
        <div class="contentsContainer">
            <div v-for="(item,index) in state.selected" :key="index">
                <p>{{(item.get_code().code)}}</p>
            </div>
        </div>
        </div>

    </div>
</div>
</template>

<script setup>
import {
    reactive,ref
} from 'vue';

import {
    VueDraggableNext
} from 'vue-draggable-next'

import Content from './Content.vue';
let num=1;
let currectCounter = num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

const getCurrentCounter = () => {
    // increment the currentCounter
    let temp=parseInt(currectCounter)+1;
    currectCounter = temp.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    return currectCounter;
}

const state = reactive({

    data: [{
            id: 1,
            type: "Facility",
            imgUrl: "https://i.ibb.co/PNTkwGV/image.png",
            get_code:function(){
                return { code: `<param name="ACATEGORY" order="${getCurrentCounter()}">
        <security role="RegionalOffice"/>
        <security role="HeadOffice"/>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="newLine"/>
        <component clazz="ca.jri.reports.component.common.CategoryGroupFacilityComponent" type="category"
                   required="true" description="Category">
            <init-param>
                <init-name>list</init-name>
                <init-value>ALL;53</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticParam</init-name>
                <init-value>Category Name</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticWithValue</init-name>
                <init-value>p092_category_nam</init-value>
            </init-param>
        </component>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="button"
                   required="false" description="GO">
            <init-param>
                <init-name>properties</init-name>
                <init-value>class=smallButton</init-value>
            </init-param>
        </component>
    </param>
    <param name="ACATEGORY" order="${getCurrentCounter()}">
        <security role="CountryLocation"/>
        <security role="External"/>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="static"
                   value="106" />
    </param>
    <param name="AGROUP" order="${getCurrentCounter()}">
        <security role="RegionalOffice"/>
        <security role="HeadOffice"/>
        <component clazz="ca.jri.reports.component.common.CategoryGroupFacilityComponent" type="group"
                   required="true" description="Group">
            <init-param>
                <init-name>list</init-name>
                <init-value>ALL;1</init-value>
            </init-param>
            <init-param>
                <init-name>category</init-name>
                <init-value>ACATEGORY</init-value>
            </init-param>
            <init-param>
                <init-name>key</init-name>
                <init-value>p094_group_num</init-value>
            </init-param>
            <init-param>
                <init-name>keyValue</init-name>
                <init-value>p094_group_nam</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticParam</init-name>
                <init-value>Group Name</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticWithValue</init-name>
                <init-value>p094_group_nam</init-value>
            </init-param>
        </component>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="button"
                   required="false" description="GO">
            <init-param>
                <init-name>properties</init-name>
                <init-value>class=smallButton</init-value>
            </init-param>
        </component>
    </param>
    <param name="AGROUP" order="${getCurrentCounter()}">
        <security role="CountryLocation"/>
        <security role="External"/>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="static"
                   value="227" />
    </param>
	<param name="AFACILITY" order="${getCurrentCounter()}">
        <security role="RegionalOffice"/>
        <security role="HeadOffice"/>
        <component clazz="ca.jri.reports.component.common.CategoryGroupFacilityComponent" type="facility"
                   required="true" description="Facility">
            <init-param>
                <init-name>category</init-name>
                <init-value>ACATEGORY</init-value>
            </init-param>
            <init-param>
                <init-name>group</init-name>
                <init-value>AGROUP</init-value>
            </init-param>
            <init-param>
                <init-name>showActive</init-name>
                <init-value>true</init-value>
            </init-param>
            <init-param>
                <init-name>key</init-name>
                <init-value>p100_facility_num</init-value>
            </init-param>
			<init-param>
                <init-name>keyValue</init-name>
                <init-value>p100_description_txt</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticParam</init-name>
                <init-value>Facility Name</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticWithValue</init-name>
                <init-value>p100_description_txt</init-value>
            </init-param>
			<init-param>
                <init-name>stationsOnly</init-name>
                <init-value>true</init-value>
            </init-param>
			<init-param>
              <init-name>listDelimiter</init-name>
              <init-value>,</init-value>
           </init-param>
        </component>
    </param>

    <param name="Facility Name" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="static" />
    </param>` 
}
            }},
        {
            id: 2,
            type: "Single_Product",
            imgUrl: "https://i.ibb.co/hVHmfPs/image.png",
            get_code:function(){
                return { code: `<param name="APRODUCTLINECDE" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.cropinputs.ProductComponent2"
                   type="productLine" jarFiles="component-cropinputs.jar" required="true"
                   description="Product Line">
            <init-param>
                <init-name>list</init-name>
                <init-value>ALL;ALL</init-value>
            </init-param>
            <init-param>
                <init-name>valueDelimiter</init-name>
                <init-value>;</init-value>
            </init-param>
            <init-param>
                <init-name>listDelimiter</init-name>
                <init-value>;</init-value>
            </init-param>
            <init-param>
                <init-name>keyValue</init-name>
                <init-value>p302_description_txt</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticParam</init-name>
                <init-value>Product Line Desc</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticWithValue</init-name>
                <init-value>p302_description_txt</init-value>
            </init-param>
        </component>
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="button"
                   required="false" description="GO">
            <init-param>
                <init-name>properties</init-name>
                <init-value>class=smallButton</init-value>
            </init-param>
        </component>
    </param>
    <param name="Product Line Desc" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="static" />
    </param>
    <param name="APRODUCT" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.AutoCompleteComponent"
               type="productCode" required="false" description="Select Product (Leave blank for all)">
            <init-param>
                <init-name>dataSource</init-name>
                <init-value>jriproduct</init-value>
            </init-param>
            <init-param>
                <init-name>displayName</init-name>
                <init-value>product</init-value>
            </init-param>
            <init-param>
                <init-name>columns</init-name>
                <init-value>PRODUCT,PROD_DESC,PROD_CDE</init-value>
            </init-param>
            <init-param>
                <init-name>size</init-name>
                <init-value>60</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticParam</init-name>
                <init-value>ProductName</init-value>
            </init-param>
            <init-param>
              <init-name>configParams</init-name>
              <init-value>APRODLINE;APRODUCTLINECDE</init-value>
            </init-param>
            <init-param>
                <init-name>populateStaticWithValue</init-name>
                <init-value>p300_description_txt</init-value>
            </init-param>
            <init-param>
                <init-name>multiple</init-name>
                <init-value>false</init-value>
            </init-param>
            <init-param>
                <init-name>multiListCodes</init-name>
                <init-value>APRODUCTCDELIST</init-value>
            </init-param>
            <init-param>
                <init-name>multiListDescs</init-name>
                <init-value>ProductDescList</init-value>
            </init-param>
        </component>
    </param>
    <param name="APRODUCTCDELIST" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="static" />
    </param>`
            }},
        },
        {
            id: 3,
            type: "FromAndToDate",
            imgUrl: "https://i.ibb.co/FHr6sbL/image.png",
            get_code:function(){
                const dummyCounter=0;
                return { code: `<param name="AFROMDTE" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.DateEntryComponent2" type="date"
                   required="true" description="Date for start of reporting period">
            <init-param>
                <init-name>time</init-name>
                <init-value>00:00:00</init-value>
            </init-param>
        </component>
    </param>
    <param name="ATODTE" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.DateEntryComponent2" type="date"
                   required="true" description="Date for end of reporting period">
            <init-param>
                <init-name>time</init-name>
                <init-value>23:59:59</init-value>
            </init-param>
        </component>
    </param>`
            }},
        },
        {
            id: 4,
            type: "ShouldExport",
            imgUrl: "https://i.ibb.co/9qNxtt6/image.png",
            get_code:function(){
                const dummyCounter=0;
                return { code: `    <param name="AEXPORT" order="${getCurrentCounter()}">
        <component clazz="ca.jri.reports.component.common.EntryComponent" type="list"
                          required="true" description="Export">
            <init-param>
                <init-name>list</init-name>
                <init-value>Yes;true,No;false</init-value>
            </init-param>
        </component>
    </param>`
            
        }}},
        
    ],
    selected: []
})

const methods = {
    log(event) {
        currectCounter=1;
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
    overflow-y: scroll;
}

.contentContainer {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
}
</style>
