import React, { Component } from 'react';

import cn from 'classnames';

class Tab extends Component {
    render() {
        const { icon, text, link, isActive, className } = this.props || null;
        return (
            <a
                href={link}
                className={cn(
                    'flex justify-center rounded-b-xl font-semibold hover:font-semibold hover:bg-primary',
                    className,
                    {
                        'bg-primary dark:bg-grey-4': isActive,
                        'bg-[#CED2D6] dark:bg-grey-3': !isActive,
                    }
                )}
            >
                {icon} {text}
            </a>
        );
    }
}

export default Tab;
