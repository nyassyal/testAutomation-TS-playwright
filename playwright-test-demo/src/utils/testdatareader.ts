import fs from 'fs';
import {TEST_DATA_PATH} from '../constants/constants';

const testDataPath = TEST_DATA_PATH;

export function getTestData(key: string) :string{
    if(!fs.existsSync(testDataPath)){
        throw new Error(`Test data file not found :${testDataPath}`);
    }

    const rawData = fs.readFileSync(testDataPath, 'utf-8');
    const testData = JSON.parse(rawData);

    if(!(key in testData)){
        throw new Error (`Key ${key} not found in test data`)
    }

    return testData[key];

}