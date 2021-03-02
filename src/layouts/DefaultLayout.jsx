import React, { useState, useEffect } from 'react';
import useOnlineStatus from '@/hooks/useOnlineStatus';
import PropTypes from 'prop-types';
import Offline from '@/common/components/Offline/Offline';
import LoadingScreen from '@/common/components/Loading/Loading';
import Toastify from '@/common/components/Toastify/Toastify';
import ChangeLanguage from '@/common/components/ChangeLanguage/ChangeLanguage';

function DefaultLayout({ children }) {
    const onlineStatus = useOnlineStatus();

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 2000);
    }, []);

    if (!onlineStatus.online) {
        return <Offline />;
    }

    return (
        <>
            {spinner && <LoadingScreen />}
            <Toastify />
            <ChangeLanguage />
            {children}
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default DefaultLayout;
