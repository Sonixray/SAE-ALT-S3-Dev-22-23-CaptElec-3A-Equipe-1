import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import {
    HomePage,
    AuthPage,
    LivePage,
    HistoryPage,
    ContactPage,
    TACPage,
    PrivacyPolicyPage,
    SettingsPage,
    Error,
    Error404,
} from './pages';

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        const colorScheme = e.matches ? 'dark' : 'light';
        if (colorScheme === 'dark') {
            document.documentElement.style.setProperty(
                'color-scheme',
                'dark only'
            );
            document.querySelector('html').classList.add('dark');
            localStorage.setItem('isDarkMode', true);
        } else {
            document.documentElement.style.setProperty(
                'color-scheme',
                'light only'
            );
            document.querySelector('html').classList.remove('dark');
            localStorage.setItem('isDarkMode', true);
        }
    });

const navigatorDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem('isDarkMode') === null)
    localStorage.setItem('isDarkMode', navigatorDarkMode);

const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
if (isDarkMode) {
    document.documentElement.style.setProperty('color-scheme', 'dark only');
    document.querySelector('html').classList.add('dark');
} else {
    document.documentElement.style.setProperty('color-scheme', 'light only');
    document.querySelector('html').classList.remove('dark');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/auth',
                    element: <AuthPage />,
                },
                {
                    path: '/live',
                    element: <LivePage />,
                },
                {
                    path: '/history',
                    element: <HistoryPage />,
                },
                {
                    path: '/contact',
                    element: <ContactPage />,
                },
                {
                    path: '/terms-and-conditions',
                    element: <TACPage />,
                },
                {
                    path: '/privacy-policy',
                    element: <PrivacyPolicyPage />,
                },
                {
                    path: '/settings',
                    element: <SettingsPage />,
                },
                {
                    path: '/error',
                    element: <Error />,
                },
                {
                    path: '*',
                    element: <Error404 />,
                },
            ])}
        />
    </React.StrictMode>
);
