/** This is a page setup file that is run before each test */

import {Page, test as baseTest} from '@playwright/test';
// import {setPage} from './pageUtils';
// import {Logger} from '../logger/customLogger';


baseTest.beforeEach(({page}:{page: Page})=>{
    // Logger.debug('Setting up page for test');
    // setPage(page);
});

baseTest.afterEach(({page}:{page: Page})=>{
    // Logger.debug('Setting up page for test');
    // setPage(page);
});


export const test = baseTest;