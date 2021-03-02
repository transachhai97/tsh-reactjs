import { useState, useEffect } from 'react';

export default function useOnlineStatus() {
    const [online, setOnline] = useState(true);

    function handler(event) {
        setOnline(navigator.onLine);

        if (event.type === 'online') {
            // handle stuffs when browser resume online
        } else {
            // handle stuffs when browser goes offline
        }
    }

    function resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        let baseSize = width;
        if (width > height * (16 / 9)) {
            baseSize = height * (16 / 9);
        }

        // eslint-disable-next-line no-mixed-operators
        document.getElementsByTagName('html')[0].style.fontSize = `${baseSize / 128 * 10}%`;
    }

    useEffect(() => {
        window.addEventListener('online', handler);
        window.addEventListener('offline', handler);

        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('online', handler);
            window.removeEventListener('offline', handler);
            window.removeEventListener('resize', resize);
        };
    });

    return { online };
}
