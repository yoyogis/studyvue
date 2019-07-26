import Dataset from '@/api/models/Dataset.model';
export const DatasetMutations = {
    setDatasets : 'setDatasets',
    selectedDataset : 'selectedDataset',
};

export default {
  state: {
      datasets: [],
      selectedDataset : null,
  },
  mutations: {
      [DatasetMutations.setDatasets](state: any, datasets: Dataset[]) {
        state.datasets = datasets;
      },

      [DatasetMutations.selectedDataset](state: any, dataset: Dataset) {
        state.selectedDataset = dataset;
      },
  },
  actions: {},
};
