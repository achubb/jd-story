import React, { FC } from 'react'
import * as Styled from './Text.styles';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the CSS 'text-align' property
     * @default left
     */
    align?: "left" | "right" | "center"
    /**
     * Set the font size of the text
     * @default md
     */
    fontSize?: "xs" | "sm" | "md" | "lg" | "xl"
}

/**
 * Text
 * @function Text
 * @param {string} align - CSS 'text-align' property
 * @param {string} fontSize - set the font size of the text
 * @param {children} ReactNode - set any paragaph children
 * @returns {JSX.Element} - rendered Text
 */

const Text: FC<TextProps> = ({
    align = 'left',
    fontSize = 'xl',
    children,
    ...rest
}) => {
    return (
        <Styled.P 
            align={align}
            fontSize={fontSize}
            {...rest}
        >
            { children }
        </Styled.P>
    )
}

export default Text;