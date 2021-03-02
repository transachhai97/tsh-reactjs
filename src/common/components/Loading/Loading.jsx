import React from 'react';

import images from '@/helpers/images';
import styles from './css/loading-screen.scss';

function LoadingScreen() {
    return (
        <div className={styles.loadingScreen}>
            <img
                src={images.logo}
                className={styles.loading}
                alt="logo"
            />
        </div>
    );
}

export default LoadingScreen;
