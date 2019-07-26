import Dataset from '../models/Dataset.model';

export default {
  async getDatasets(): Promise<Dataset[]> {
    return await Promise.resolve([{ id: 'dsds', name: 'a dataset' }]);
  },
};
