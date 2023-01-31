/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';

import { Header, Footer } from '../components';

class PrivacyPolicyPage extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="w-full h-[calc(100vh-96px)] px-56">
                    <p className="text-5xl text-center mt-8" id="title">
                        Politique de confidentialité
                    </p>

                    <h2 className="docs-title">Définitions</h2>
                    <p className="docs-paragraph">
                        L'Éditeur: La personne, physique ou morale, qui édite
                        les services de communication au public en ligne.
                        <br />
                        Le Site: L'ensemble des sites, pages Internet et
                        services en ligne proposés par l'Éditeur.
                        <br />
                        L'Utilisateur: La personne utilisant le Site et les
                        services.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Nature des données collectées
                    </h2>
                    <p className="docs-paragraph">
                        Dans le cadre de l'utilisation des Sites, l'Éditeur est
                        susceptible de collecter les catégories de données
                        suivantes concernant ses Utilisateurs :<br />
                        Données de connexion (adresses IP, journaux
                        d'événements...)
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Communication des données personnelles des tiers
                    </h2>
                    <p className="docs-paragraph">
                        Pas de communication à des tiers
                        <br />
                        Vos données ne font l'objet d'aucune communication à des
                        tiers. Vous êtes toutefois informés qu'elles pourront
                        être divulguées en application d'une loi, d'un règlement
                        ou en vertu d'une décision d'une autorité réglementaire
                        ou judiciaire compétente.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Information préalable pour la communication des données
                        personnelles à des tiers en cas de fusion / absorption
                    </h2>
                    <p className="docs-paragraph">
                        Collecte de l’opt-in (consentement) préalable à la
                        transmission des données suite à une fusion /
                        acquisition
                        <br />
                        Dans le cas où nous prendrions part à une opération de
                        fusion, d’acquisition ou à toute autre forme de cession
                        d’actifs, nous nous engageons à obtenir votre
                        consentement préalable à la transmission de vos données
                        personnelles et à maintenir le niveau de confidentialité
                        de vos données personnelles auquel vous avez consenti.
                        <br />
                    </p>

                    <h2 className="docs-title">Agrégation des données</h2>
                    <p className="docs-paragraph">
                        Agrégation avec des données non personnelles <br />
                        Nous pouvons publier, divulguer et utiliser les
                        informations agrégées (informations relatives à tous nos
                        Utilisateurs ou à des groupes ou catégories spécifiques
                        d'Utilisateurs que nous combinons de manière à ce qu'un
                        Utilisateur individuel ne puisse plus être identifié ou
                        mentionné) et les informations non personnelles à des
                        fins d'analyse du secteur et du marché, de profilage
                        démographique, à des fins promotionnelles et
                        publicitaires et à d'autres fins commerciales.
                        <br />
                        Agrégation avec des données personnelles disponibles sur
                        les comptes sociaux de l'Utilisateur
                        <br />
                        Si vous connectez votre compte à un compte d’un autre
                        service afin de faire des envois croisés, ledit service
                        pourra nous communiquer vos informations de profil, de
                        connexion, ainsi que toute autre information dont vous
                        avez autorisé la divulgation. Nous pouvons agréger les
                        informations relatives à tous nos autres Utilisateurs,
                        groupes, comptes, aux données personnelles disponibles
                        sur l’Utilisateur.
                    </p>

                    <h2 className="docs-title">
                        Collecte des données d'identité
                    </h2>
                    <p className="docs-paragraph">
                        Inscription et identification préalable pour la
                        fourniture du service
                        <br />
                        L’utilisation du Site nécessite une inscription et une
                        identification préalable. Vos données nominatives (nom,
                        prénom, adresse postale, e-mail, numéro de
                        téléphone,...) sont utilisées pour exécuter nos
                        obligations légales résultant de la livraison des
                        produits et / ou des services, en vertu du Contrat de
                        licence utilisateur final, de la Limite de garantie, le
                        cas échéant, ou de toute autre condition applicable.
                        Vous ne fournirez pas de fausses informations
                        nominatives et ne créerez pas de compte pour une autre
                        personne sans son autorisation. Vos coordonnées devront
                        toujours être exactes et à jour.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Collecte des données d'identification
                    </h2>
                    <p className="docs-paragraph">
                        Utilisation de l'identifiant de l’utilisateur uniquement
                        pour l’accès aux services <br />
                        Nous utilisons vos identifiants électroniques seulement
                        pour et pendant l'exécution du contrat.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Collecte des données du terminal
                    </h2>
                    <p className="docs-paragraph">
                        Aucune collecte des données techniques
                        <br />
                        Nous ne collectons et ne conservons aucune donnée
                        technique de votre appareil (adresse IP, fournisseur
                        d'accès à Internet...).
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Collecte des données du terminal
                    </h2>
                    <p className="docs-paragraph">
                        Durée de conservation des cookies
                        <br />
                        Conformément aux recommandations de la CNIL, la durée
                        maximale de conservation des cookies est de 13 mois au
                        maximum après leur premier dépôt dans le terminal de
                        l'Utilisateur, tout comme la durée de la validité du
                        consentement de l’Utilisateur à l’utilisation de ces
                        cookies. La durée de vie des cookies n’est pas prolongée
                        à chaque visite. Le consentement de l’Utilisateur devra
                        donc être renouvelé à l'issue de ce délai.
                        <br />
                        Finalité cookies
                        <br />
                        Les cookies peuvent être utilisés pour des fins
                        statistiques notamment pour optimiser les services
                        rendus à l'Utilisateur, à partir du traitement des
                        informations concernant la fréquence d'accès, la
                        personnalisation des pages ainsi que les opérations
                        réalisées et les informations consultées.
                        <br />
                        Vous êtes informé que l'Éditeur est susceptible de
                        déposer des cookies sur votre terminal. Le cookie
                        enregistre des informations relatives à la navigation
                        sur le service (les pages que vous avez consultées, la
                        date et l'heure de la consultation...) que nous pourrons
                        lire lors de vos visites ultérieures.
                        <br />
                        Opt-in pour le dépôt de cookies
                        <br />
                        Nous n'utilisons pas de cookies. Si nous devions en
                        utiliser à l’avenir, vous en seriez informé
                        préalablement et auriez la possibilité de désactiver ces
                        cookies.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Conservation des données techniques
                    </h2>
                    <p className="docs-paragraph">
                        Durée de conservation des données techniques
                        <br />
                        Les données techniques sont conservées pour la durée
                        strictement nécessaire à la réalisation des finalités
                        visées ci-avant.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Délai de conservation des données personnelles et
                        d'anonymisation
                    </h2>
                    <p className="docs-paragraph">
                        Pas de conservation des données
                        <br />
                        Nous ne conservons aucune donnée personnelle au delà de
                        votre durée de connexion au service pour les finalités
                        décrites dans les présentes Politique de
                        confidentialité.
                        <br />
                        Suppression des données après suppression du compte
                        <br />
                        Des moyens de purge de données sont mis en place afin
                        d'en prévoir la suppression effective dès lors que la
                        durée de conservation ou d'archivage nécessaire à
                        l'accomplissement des finalités déterminées ou imposées
                        est atteinte. Conformément à la loi n°78-17 du 6 janvier
                        1978 relative à l'informatique, aux fichiers et aux
                        libertés, vous disposez par ailleurs d'un droit de
                        suppression sur vos données que vous pouvez exercer à
                        tout moment en prenant contact avec l'Éditeur.
                        <br />
                        Suppression des données après 3 ans d'inactivité
                        <br />
                        Pour des raisons de sécurité, si vous ne vous êtes pas
                        authentifié sur le Site pendant une période de trois
                        ans, vous recevrez un e-mail vous invitant à vous
                        connecter dans les plus brefs délais, sans quoi vos
                        données seront supprimées de nos bases de données.
                        <br />
                    </p>

                    <h2 className="docs-title">Suppression d'un compte</h2>
                    <p className="docs-paragraph">
                        Suppression du compte à la demande
                        <br />
                        L'Utilisateur a la possibilité de supprimer son Compte à
                        tout moment, par simple demande à l'Éditeur OU par le
                        menu de suppression de Compte présent dans les
                        paramètres du Compte le cas échéant.
                        <br />
                        Suppression du compte en cas de violation de la
                        Politique de Confidentialité
                        <br />
                        En cas de violation d'une ou de plusieurs dispositions
                        de la Politique de Confidentialité ou de tout autre
                        document incorporé aux présentes par référence,
                        l'Éditeur se réserve le droit de mettre fin ou
                        restreindre sans aucun avertissement préalable et à sa
                        seule discrétion, votre usage et accès aux services, à
                        votre compte et à tous les Sites.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Indication des failles de sécurité
                    </h2>
                    <p className="docs-paragraph">
                        Information de l'Utilisateur en cas de faille de
                        sécurité
                        <br />
                        Nous nous engageons à mettre en oeuvre toutes les
                        mesures techniques et organisationnelles appropriées
                        afin de garantir un niveau de sécurité adapté au regard
                        des risques d'accès accidentels, non autorisés ou
                        illégaux, de divulgation, d'altération, de perte ou
                        encore de destruction des données personnelles vous
                        concernant. Dans l'éventualité où nous prendrions
                        connaissance d'un accès illégal aux données personnelles
                        vous concernant stockées sur nos serveurs ou ceux de nos
                        prestataires, ou d'un accès non autorisé ayant pour
                        conséquence la réalisation des risques identifiés
                        ci-dessus, nous nous engageons à :<br />
                        Vous notifier l'incident dans les plus brefs délais ;
                        Examiner les causes de l'incident et vous en informer ;
                        <br />
                        Prendre les mesures nécessaires dans la limite du
                        raisonnable afin d'amoindrir les effets négatifs et
                        préjudices pouvant résulter dudit incident.
                        <br />
                        Limitation de la responsabilité
                        <br />
                        En aucun cas les engagements définis au point ci-dessus
                        relatifs à la notification en cas de faille de sécurité
                        ne peuvent être assimilés à une quelconque
                        reconnaissance de faute ou de responsabilité quant à la
                        survenance de l'incident en question.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Transfert des données personnelles
                    </h2>
                    <p className="docs-paragraph">
                        Pas de transfert en dehors de l'Union européenne
                        <br />
                        L'Éditeur s'engage à ne pas transférer les données
                        personnelles de ses Utilisateurs en dehors de l'Union
                        européenne.
                        <br />
                        https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-mondehttps://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Modification de la politique de confidentialité
                    </h2>
                    <p className="docs-paragraph">
                        En cas de modification de la présente Politique de
                        Confidentialité, engagement de ne pas baisser le niveau
                        de confidentialité de manière substantielle sans
                        l'information préalable des personnes concernées
                        <br />
                        Nous nous engageons à vous informer en cas de
                        modification substantielle de la présente Politique de
                        Confidentialité, et à ne pas baisser le niveau de
                        confidentialité de vos données de manière substantielle
                        sans vous en informer et obtenir votre consentement.
                        <br />
                    </p>

                    <h2 className="docs-title">
                        Droit applicable et modalités de recours
                    </h2>
                    <p className="docs-paragraph">
                        Application du droit français (législation CNIL) et
                        compétence des tribunaux
                        <br />
                        La présente Politique de Confidentialité et votre
                        utilisation du Site sont régies et interprétées
                        conformément aux lois de France, et notamment à la Loi
                        n° 78-17 du 6 janvier 1978 relative à l'informatique,
                        aux fichiers et aux libertés. Le choix de la loi
                        applicable ne porte pas atteinte à vos droits en tant
                        que consommateur conformément à la loi applicable de
                        votre lieu de résidence. Si vous êtes un consommateur,
                        vous et nous acceptons de se soumettre à la compétence
                        non-exclusive des juridictions françaises, ce qui
                        signifie que vous pouvez engager une action relative à
                        la présente Politique de Confidentialité en France ou
                        dans le pays de l'UE dans lequel vous vivez. Si vous
                        êtes un professionnel, toutes les actions à notre
                        encontre doivent être engagées devant une juridiction en
                        France.
                        <br />
                        En cas de litige, les parties chercheront une solution
                        amiable avant toute action judiciaire. En cas d'échec de
                        ces tentatives, toutes contestations à la validité,
                        l'interprétation et / ou l'exécution de la Politique de
                        Confidentialité devront être portées même en cas de
                        pluralité des défendeurs ou d'appel en garantie, devant
                        les tribunaux français.
                        <br />
                    </p>

                    <h2 className="docs-title">Portabilité des données</h2>
                    <p className="docs-paragraph">
                        Portabilité des données
                        <br />
                        L'Éditeur s'engage à vous offrir la possibilité de vous
                        faire restituer l'ensemble des données vous concernant
                        sur simple demande. L'Utilisateur se voit ainsi garantir
                        une meilleure maîtrise de ses données, et garde la
                        possibilité de les réutiliser. Ces données devront être
                        fournies dans un format ouvert et aisément réutilisable.
                        <br />
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                </main>
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicyPage;
