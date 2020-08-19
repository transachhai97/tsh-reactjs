import React, { useEffect } from 'react';

import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

const CNprogress = () => {
    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }, []);

    return <div>Loading...</div>;
};

export default CNprogress;
