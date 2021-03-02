import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@/app/store';
import '@/locales/i18n';
import Toastify from '@/common/components/Toastify/Toastify';
import CNprogress from '@/common/components/CNprogress/CNprogress';
import ChangeLanguage from '@/common/components/ChangeLanguage/ChangeLanguage';

import '@/styles/index.scss';

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}

const App = lazy(() => import('@/App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<CNprogress />}>
            <Provider store={store}>
                <>
                    <Toastify />
                    <ChangeLanguage />
                    <App name="Trần Sách Hải" />
                </>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
