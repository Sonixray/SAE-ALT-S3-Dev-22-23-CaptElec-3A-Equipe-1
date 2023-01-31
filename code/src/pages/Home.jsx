import React, { Component } from 'react';

import { Header, Footer } from '../components';

class HomePage extends Component {
    // const casEndpoint = 'authc.univ-toulouse.fr';
    // const casOptions = { version: constant.CAS_VERSION_2_0 };
    // this.state = { casClient: new CasClient(casEndpoint, casOptions) };

    componentDidMount() {}

    render() {
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] flex flex-col justify-center items-center">
                    {/* TITLE */}
                    <h1 className="text-9xl font-extrabold mb-8">
                        Projet CaptElec
                    </h1>

                    {/* TEXTE DE PRESENTATION */}
                    <p className="text-lg text-center opacity-60">
                        CaptElec offre la possibilité d&apos;accèder à une
                        version ergonomique du suivi des données
                        environnementales de l&apos;IUT de BLAGNAC
                    </p>

                    {/* BOUTON CONNEXION */}
                    <button
                        type="button"
                        className="relative align-middle w-52 transition ease-in-out delay-80 bg-[#ced4da] hover:bg-[#b9bfc4] drop-shadow-xl rounded-md p-2 mt-10"
                        onClick={() => {
                            window.location.href = '/live';
                            // this.state.casClient
                            //     .auth()
                            //     .then((successRes) => {
                            //         console.log(successRes);
                            //         this.props.navigation.navigate('/live', {
                            //             successRes,
                            //         });
                            //     })
                            //     .catch((errorRes) => {
                            //         console.error(errorRes);
                            //     });
                        }}
                    >
                        <img
                            className="h-6 w-6 inline align-middle mr-1"
                            src="https://webetud.iut-blagnac.fr/pluginfile.php/1/auth_cas/logo/UFTMIP.png"
                            alt='logo "UFTMIP"'
                        />
                        <span className="text-[black]">CAS</span>
                    </button>
                </main>
                <Footer />
            </>
        );
    }
}

export default HomePage;
