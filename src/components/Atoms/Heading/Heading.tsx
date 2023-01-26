import React, { FC } from 'react';
import * as Styled from './Heading.styles';
import { FontSize, TextAlign, TextColor } from '../../styles/theme';

type ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeaderProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the Element type for the heading to be rendered as
     * @default h2
     */
    as?: ElementType
    /**
     * Set the CSS 'text-align' property
     * @default left
     */
    align?: TextAlign
    /**
     * Set the font size of the text
     * @default xl
     */
    fontSize?: FontSize
    /** 
     * Set the colour of the heading
     * @default brandPrimary
     */
    textColor?: TextColor
}

/**
 * Heading
 * @function Heading
 * @param {string} align - CSS 'text-align' property
 * @param {children} ReactNode - set any paragaph children
 * @returns {JSX.Element} - rendered heading
 */

const Heading: FC<HeaderProps> = ({
    as = 'h2',
    align = 'left',
    fontSize = 'xl',
    textColor = 'primary',
    children,
    ...rest
}) => {
    return (
        <Styled.Heading
            as={as}
            align={align}
            fontSize={fontSize}
            textColor={textColor}
            {...rest}
        >
            { children }
        </Styled.Heading>
    );
};

export default Heading;