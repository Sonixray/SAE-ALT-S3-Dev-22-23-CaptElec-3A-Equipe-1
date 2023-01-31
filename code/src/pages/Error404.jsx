import React, { Component } from 'react';

import { Header, Footer } from '../components';

class Error404 extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] flex justify-center">
                    <img
                        src="/img/img_page404.jpeg"
                        alt="Page d'erreur 404"
                        className="h-[auto] w-[auto]"
                    />
                </main>
                <Footer />
            </>
        );
    }
}
export default Error404;
