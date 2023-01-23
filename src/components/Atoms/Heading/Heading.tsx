import React, { FC } from 'react';
import * as Styled from './Heading.styles';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the CSS 'text-align' property
     * @default left
     */
    align?: "left" | "right" | "center"
}

/**
 * Heading
 * @function Heading
 * @param {string} align - CSS 'text-align' property
 * @param {children} ReactNode - set any paragaph children
 * @returns {JSX.Element} - rendered heading
 */

const Heading: FC<HeaderProps> = ({
    align = 'left',
    children,
    ...rest
}) => {
    return (
        <Styled.H3
            align={align}
            {...rest}
        >
            { children }
        </Styled.H3>
    );
};

export default Heading;