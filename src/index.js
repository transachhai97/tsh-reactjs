import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@/app/store';
import * as serviceWorker from '@/serviceWorker';
import '@/locales/i18n';

import '@/index.scss';

const App = lazy(() => import('@/App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <App name="Trần Sách Hải" />
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
