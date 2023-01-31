import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    /* eslint-disable-next-line class-methods-use-this */
    toggleDarkMode() {
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.style.setProperty(
                'color-scheme',
                'light only'
            );
            document.querySelector('html').classList.remove('dark');
            localStorage.setItem('isDarkMode', false);
            document.getElementById('DarkLightButton').innerHTML = 'light_mode';
        } else {
            document.documentElement.style.setProperty(
                'color-scheme',
                'dark only'
            );
            document.querySelector('html').classList.add('dark');
            localStorage.setItem('isDarkMode', true);
            document.getElementById('DarkLightButton').innerHTML = 'dark_mode';
        }
    }

    render() {
        return (
            <header className="flex justify-between items-center h-14 p-2 z-50 top-0 bg-primary dark:bg-grey-4">
                <a href="/">
                    <div className="flex items-center">
                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            className="h-10 ml-2 mr-2 mt-2 mb-4"
                        />

                        <h1 className="text-3xl font-bold">CaptElec</h1>
                    </div>
                </a>
                <div className="flex gap-4">
                    {localStorage.getItem('token') && (
                        <button
                            type="button"
                            onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/';
                            }}
                            className="flex"
                        >
                            <span className="material-icons items-center">
                                logout
                            </span>
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={this.toggleDarkMode}
                        className="flex"
                    >
                        <span
                            className="material-icons-outlined items-center"
                            id="DarkLightButton"
                        >
                            {localStorage.getItem('isDarkMode') === 'true'
                                ? 'dark_mode'
                                : 'light_mode'}
                        </span>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
