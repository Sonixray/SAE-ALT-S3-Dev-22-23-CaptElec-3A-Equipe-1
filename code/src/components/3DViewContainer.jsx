import React from 'react';

import { AnimatePresence } from 'framer-motion';

class ViewContainer extends React.Component {
    render() {
        const {
            children,
            className,
            id,
            data,
            sensorParam,
            selectLocation,
            viewNavigation,
            stroke,
            defaultFill,
            setSelectedSalle,
        } = this.props || null;
        return (
            <AnimatePresence mode="wait">
                <svg
                    key={id}
                    version="1.0"
                    viewBox="0 0 1200 400"
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                data,
                                sensorParam,
                                selectLocation,
                                viewNavigation,
                                stroke,
                                defaultFill,
                                setSelectedSalle,
                            });
                        }
                        return child;
                    })}
                </svg>
            </AnimatePresence>
        );
    }
}

export default ViewContainer;
