import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'swiper/swiper-bundle.css';
import cssVars from 'css-vars-ponyfill';

import { config } from './constants/cssVarsConfig';
import { ieDetector } from './utils/helper';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

if (ieDetector()) {
    cssVars(config);
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 0,
            staleTime: 0,
            retry: false,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
