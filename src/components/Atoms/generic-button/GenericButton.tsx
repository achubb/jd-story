import React, { FC } from 'react';
import { StyledButton } from './GenericButton.styles';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
    isLoading?: boolean;
    isCompleted?: boolean;
    disabled?: boolean;
    text?: string;
}

/** 
 * Generic Button
 * @function Button
 * @param {boolean} isLoading - set the styles for the loading state
 * @param {boolean} isCompleted - set the styles for the completed state
 * @param {boolean} disabled - set the styles for the disabled state
 * @param {string} text - set the display text for the button
 * @param {children} ReactNode - set any button children
 * @returns {JSX.Element} - rendered button
 * 
*/

const Button: FC<Props> = ({
    children,
    isLoading,
    isCompleted,
    text,
    ...rest
}) => {
    return (
        <StyledButton
            isLoading={isLoading}
            isCompleted={isCompleted}
            {...rest}
        >
            { children }
            { text && text }
        </StyledButton>
    )
}

export default Button;