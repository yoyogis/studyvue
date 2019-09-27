<template>
    <div class="project">
    <h1>Project....</h1>
      <router-link to="/project/dataset">Dataset</router-link> |
      <router-link to="/project/recipe">Recipe</router-link>
      <router-view></router-view>
    </div>
</template>
<style>
    .project{
        border: solid 3px blue;
    }
</style>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';
import Dataset from '../dataset/Dataset.vue';
@Component({
    components:{
        Dataset
    }
})
export default class Home extends Vue{
    
}
</script>

