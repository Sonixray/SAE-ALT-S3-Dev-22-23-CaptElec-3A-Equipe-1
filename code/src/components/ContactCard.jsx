import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        const { nom, job, mail } = this.props || null;
        return (
            <div className="flex flex-col border rounded">
                <div className="flex flex-col py-1 px-4 text-[black] bg-grey-2 rounded">
                    <div className="text-xl">{nom}</div>
                    <div>{job}</div>
                </div>
                <div className="p-4">
                    <a href={`mailto:${mail}`}>{mail}</a>
                </div>
            </div>
        );
    }
}

export default ContactCard;
