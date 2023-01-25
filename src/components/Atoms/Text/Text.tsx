import React, { FC } from 'react'
import * as Styled from './Text.styles';
import { FontSize, TextAlign, TextColor } from '../../styles/theme';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the CSS 'text-align' property
     * @default left
     */
    align: TextAlign
    /**
     * Set the font size of the text
     * @default md
     */
    fontSize: FontSize
    /**
     * Set the colour of the text
     * @default: brandPrimary
     */
    textColor: TextColor
}

/**
 * Text
 * @function Text
 * @param {string} align - CSS 'text-align' property
 * @param {children} ReactNode - set any paragaph children
 * @returns {JSX.Element} - rendered Text
 */

const Text: FC<TextProps> = ({
    align = 'left',
    fontSize = 'md',
    textColor = 'primary',
    children,
    ...rest
}) => {
    return (
        <Styled.P 
            align={align}
            fontSize={fontSize}
            textColor={textColor}
            {...rest}
        >
            { children }
        </Styled.P>
    )
}

export default Text;