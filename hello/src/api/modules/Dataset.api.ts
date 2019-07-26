import DatasetService from '../service/Dataset.service';
import Dataset from '../models/Dataset.model';

export default{
    async getDatasetList(): Promise<Dataset[]> {
        return await DatasetService.getDatasets();
    },
};
