/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import cn from 'classnames';

function AnimatedInput({ icon, placeholder, ...props }) {
    return (
        <div className="group relative h-12 rounded-md border-[3px] border-[#a5a5a6] focus-within:border-[black] focus-within:ring-1 focus-within:ring-[black]">
            <label
                htmlFor={props.id ?? props.name}
                className={cn(
                    'absolute left-2 z-0 -translate-y-1/2 bg-[white] px-1 pointer-events-none duration-200 text-[#696969] group-focus-within:top-0 group-focus-within:text-s group-focus-within:text-[black]',
                    {
                        'top-0 text-s': props.value,
                        'top-1/2 text-base': !props.value,
                    }
                )}
            >
                {placeholder}
            </label>
            <input
                {...props}
                id={props.id ?? props.name}
                className={cn(
                    'z-10 w-full h-full rounded-md px-3.5 py-4 outline-none',
                    {
                        '-mr-12 pr-12': icon,
                    }
                )}
            />
            {icon && icon}
        </div>
    );
}

export default AnimatedInput;
