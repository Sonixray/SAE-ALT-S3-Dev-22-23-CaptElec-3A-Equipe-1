import React, { Component } from 'react';

import { Header, Footer } from '../components';

class Error extends Component {
    render() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] flex flex-col justify-center gap-20 items-center">
                    <h1 className="text-5xl">Erreur</h1>
                    <p className="text-3xl text-[red]">{params.msg}</p>
                </main>
                <Footer />
            </>
        );
    }
}

export default Error;
