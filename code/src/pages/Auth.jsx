import React, { Component } from 'react';

import { Header, Footer, AnimatedInput } from '../components';

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null,
        };

        this.login = this.login.bind(this);
    }

    login() {
        const { username, password } = this.state;
        if (!username || !password || username === '' || password === '') {
            this.setState({ error: 'Veuillez remplir tous les champs' });
        } else {
            fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        window.location.href = '/live';
                    } else if (data.error) {
                        this.setState({ error: data.error });
                    } else {
                        this.setState({ error: 'Une erreur est survenue' });
                    }
                })
                .catch((err) => {
                    this.setState({
                        error: `Une erreur est survenue : ${err}`,
                    });
                });
        }
    }

    render() {
        const { error, username, password } = this.state;
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] flex flex-col justify-center gap-20 items-center">
                    <h1 className="text-5xl">Connexion</h1>
                    {error && <p className="text-[red]">{error}</p>}
                    <div className="flex flex-col gap-4">
                        <AnimatedInput
                            placeholder="Username"
                            value={username}
                            onChange={(e) => {
                                const { value } = e.target;
                                this.setState({ username: value });
                            }}
                        />
                        <AnimatedInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                const { value } = e.target;
                                this.setState({ password: value });
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.login}
                        className="w-52 transition ease-in-out delay-80 bg-[#ced4da] hover:bg-[#b9bfc4] drop-shadow-xl rounded-md p-2 mt-10 text-[black]"
                    >
                        Se connecter
                    </button>
                </main>
                <Footer />
            </>
        );
    }
}

export default AuthPage;
