<template>
    <div>
        Parent:{{a}}
        <d-child v-on:input="toChild=$event" v-bind:value='toChild'></d-child>
        <div>in parent:{{toChild}}</div>
        <transition name="fade" mode="out-in">
            
            <button v-if="docState === 'saved'" key="saved">
                Edit
            </button>
            <button v-if="docState === 'edited'" key="edited">
                Save
            </button>
            <button v-if="docState === 'editing'" key="editing">
                Cancel
            </button>
        </transition>
        <button @click="show=!show">transition</button>
        <button @click="changeEdit($event)">edit</button>
    </div>
</template>
<script>
import Vue from 'vue'
import child1 from './Child1.vue'
import focus from '../dierectives/Focus'

let states = ['saved', 'edited', 'editing'];

export default {
    components:{
        dChild:child1
    },
    directives:{
        myFocus:focus
    },

    data() {
        return {
            a:1,
            show:true,
            docState:0,
            toChild:'from parent'
        }
    },
    methods:{
        changeEdit(evt){
            if(this.docState<2){
                this.docState++
            }else{
                this.docState=0;
            }
            
            
        }
    }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to{
        opacity:0;
    }
</style>