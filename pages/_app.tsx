import * as React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../store/store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;