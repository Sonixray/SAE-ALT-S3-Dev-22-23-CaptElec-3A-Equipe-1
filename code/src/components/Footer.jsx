import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="flex justify-between items-center p-2 fixed bottom-0 h-10 w-full bg-grey-4">
                <div className="text-[white]">
                    ©Copyright 2023 - {new Date().getFullYear()} | CaptElec est
                    un projet réalisé dans le cadre des études
                </div>

                <div className="text-[white]">
                    <a href="contact">Contact</a> |{' '}
                    <a href="terms-and-conditions"> Conditions générales </a> |{' '}
                    <a href="privacy-policy">Politique de confidentialité</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
