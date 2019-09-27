<template>
    <div>
        <h2>child1:</h2>
        {{abc}}
        <h2>in child:{{value}}</h2>
        <button @click="emit">emit</button>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props:{
        value:''
    },
    data:function(){
        return {
            abc:12342
        }
    },

    computed:{
    },

    methods:{
        emit(){
            //this.value = "from child";
            this.$emit('input', "from child");
        }
    }

}
</script>