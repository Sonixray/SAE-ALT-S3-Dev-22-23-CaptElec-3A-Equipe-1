import React, { Component } from 'react';

import { Header, Footer, ContactCard } from '../components';

class ContactPage extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] flex flex-col items-center mt-6">
                    <div className="text-6xl">Contact</div>

                    <div className="flex flex-col text-center">
                        <p>Une question, une suggestion, une demande ?</p>
                        <p>
                            Envoyez-nous un mail, nous vous répondrons dans les
                            meilleurs délais !
                        </p>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center mt-8 gap-1 mx-52 pb-32">
                        <ContactCard
                            nom="Zakaria Belkheiri"
                            job="Back&#45;end &#47; Product Owner"
                            mail="zakaria&#46;belkheiri&#64;etu&#46;univ&#45;tlse2&#46;fr"
                        />
                        <ContactCard
                            nom="Hugo Castell"
                            job="Front&#45;end &#47; Scrum Master"
                            mail="hugo&#46;castell&#64;etu&#46;univ&#45;tlse2&#46;fr"
                        />
                        <ContactCard
                            nom="Loan Gayrard"
                            job="Front&#45;end &#47; Maquettiste"
                            mail="loan&#46;gayrard&#64;etu&#46;univ&#45;tlse2&#46;fr"
                        />
                        <ContactCard
                            nom="Enzo Brouxel"
                            job="Back&#45;end &#47; Base de données"
                            mail="enzo&#46;brouxel&#64;etu&#46;univ&#45;tlse2&#46;fr"
                        />
                        <ContactCard
                            nom="Paul Arago"
                            job="Front&#45;end &#47; Base de données"
                            mail="paul&#46;arago&#64;etu&#46;univ&#45;tlse2&#46;fr"
                        />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}
export default ContactPage;
