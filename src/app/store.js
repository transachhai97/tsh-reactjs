import { configureStore } from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';

import reducer from '@/app/reducer';
import isDev from '@/app/env';
import preloadedState from '@/app/preloadedState';
import middleware from '@/app/middleware';

const store = configureStore({
    reducer,
    middleware,
    devTools: isDev,
    preloadedState,
    enhancers: [reduxBatch],
});

export default store;
