import React, { Component } from 'react';

import { Header, Footer } from '../components';

class SettingsPage extends Component {
    render() {
        return (
            <>
                <Header />
                <h1>Settings</h1>
                <p>Settings content page</p>
                <Footer />
            </>
        );
    }
}

export default SettingsPage;
