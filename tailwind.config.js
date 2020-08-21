module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        // eslint-disable-next-line global-require,import/no-extraneous-dependencies
        process.env.NODE_ENV !== 'production' ? require('tailwindcss-debug-screens') : [],
    ],
};
