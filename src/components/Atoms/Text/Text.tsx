import React, { FC } from 'react'
import * as Styled from './Text.styles';
import { FontSize, TextAlign, TextColor } from '../../styles/theme';

type ElementType = "p" | "span"

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
    /**
     * Set the Element type for the text to be rendered as
     * @default p
     */
    as?: ElementType
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
    as = 'p',
    align = 'left',
    fontSize = 'md',
    textColor = 'primary',
    children,
    ...rest
}) => {
    return (
        <Styled.Text
            as={as}
            align={align}
            fontSize={fontSize}
            textColor={textColor}
            {...rest}
        >
            { children }
        </Styled.Text>
    )
}

export default Text;