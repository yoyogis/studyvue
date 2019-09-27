<template>
<div>
<keep-alive>
    <div class="home" ref='mynode'>
        
    </div>
    </keep-alive>
    </div>
</template>
<style>
    .home{
        background: green
    }
</style>
<script lang="ts">

import Vue, { VueConstructor } from 'vue'
import Component from 'vue-class-component';
@Component
export default class Home extends Vue{
    indexComponent:VueConstructor<Vue>|null = null;
    indexNode:any=null
    
    constructor(){
        super();
    }

    mounted() {
        this.indexNode = document.getElementById('index');
        let n:any = this.$refs.mynode; 
        n.appendChild(this.indexNode);
        console.log(n);
    }

    destroyed() {
        let indexCatch = document.getElementById('indexCatch');
        if(indexCatch!=null){
            indexCatch.appendChild(this.indexNode);
        }
    }
}
</script>

