<template>
  <div class="dataset">
    Dataset
    <ul>
      <li v-for="dataset in state.datasets" v-bind:key="dataset.id" @click="selectDataset(dataset)">{{dataset.name}}</li>
    </ul>
    <h1>{{state.selectedDataset}}</h1>
    <button @click="requestDatasets">add</button>
  </div>
</template>
<style>
.dataset {
  background: #abbcdd;
}
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { DatasetMutations } from "../../store/dataset.store";
import DatasetApi from "../../api/modules/Dataset.api"
@Component
export default class Dataset extends Vue {
  public state: Dataset[];
  constructor() {
    super();
    this.state = this.$store.state.datasetStore;
  }

  async requestDatasets() {
    let datasets = await DatasetApi.getDatasetList()
    this.$store.commit(DatasetMutations.setDatasets, datasets);
  }

  selectDataset(dataset:Dataset){
      this.$store.commit(DatasetMutations.selectedDataset, dataset);
  }
}
</script>

