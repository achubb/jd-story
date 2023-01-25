import React, { FC } from 'react';
import * as Styled from './Heading.styles';
import { FontSize, TextAlign, TextColor } from '../../styles/theme';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the CSS 'text-align' property
     * @default left
     */
    align: TextAlign
    /**
     * Set the font size of the text
     * @default xl
     */
    fontSize: FontSize
    /** 
     * Set the colour of the heading
     * @default brandPrimary
     */
    textColor: TextColor
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
    fontSize = 'xl',
    textColor = 'primary',
    children,
    ...rest
}) => {
    return (
        <Styled.H3
            align={align}
            fontSize={fontSize}
            textColor={textColor}
            {...rest}
        >
            { children }
        </Styled.H3>
    );
};

export default Heading;