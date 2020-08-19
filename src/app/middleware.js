import { getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export default middleware;
