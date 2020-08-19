import React, { useEffect } from 'react';

import NProgress from 'nprogress';

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
