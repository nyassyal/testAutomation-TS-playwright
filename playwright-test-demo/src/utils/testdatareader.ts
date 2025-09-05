import fs from 'fs';
import {TEST_DATA_PATH} from '../constants/constants';

const testDataPath = TEST_DATA_PATH;

//utility to load and parse JSON once
function loadTestData() :any{
    if(!fs.existsSync(testDataPath)){
        throw new Error(`Test data file not found :${testDataPath}`);
    }

    const rawData = fs.readFileSync(testDataPath, 'utf-8');
    const testData = JSON.parse(rawData);

    return testData;
}

//function to get JSON value
export function getTestData(key: string) :string{
    const testData = loadTestData();

    if(!(key in testData)){
        throw new Error (`Key ${key} not found in test data`)
    }

    return testData[key];

}

//function to get JSON object
export function getJsonObject(key:string) :Record<string,any>{
    const testData = loadTestData();

    if(!(key in testData)){
        throw new Error(`Key ${key} not found in test data`)
    }

    const value = testData[key];
    if(typeof value !=="object" || Array.isArray(value)){
        throw new Error(`Key ${key} does not contain a JSON Object`)
    }

    return value;
}

//function to get JSON array
export function getJsonArray(key:string): any[] {
    const testData = loadTestData();

    if(!(key in testData)){
        throw new Error(`Key ${key} not found in test data`)
    }

    const value = testData[key]
    if(!Array.isArray(value)){
        throw new Error (`Key ${key} does not contain a JSON Array`)
    }

    return value;
}