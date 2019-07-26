<template>
    <div class="project">
      <router-link to="/dataset">Dataset</router-link> |
      <router-link to="/recipe">Recipe</router-link>
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

