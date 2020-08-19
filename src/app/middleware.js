import { getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';

import { isLogger } from '@/app/env';

const middleware = () => {
    let newMiddleware = [...getDefaultMiddleware()];

    if (isLogger) {
        newMiddleware = [...newMiddleware, logger];
    }

    return newMiddleware;
};

export default middleware;
