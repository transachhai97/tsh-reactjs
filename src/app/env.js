const isDev = process.env.NODE_ENV !== 'production';

export const isLogger = isDev && true;

export default isDev;
