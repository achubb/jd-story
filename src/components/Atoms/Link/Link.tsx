import React from 'react'

export interface LinkProps<C extends React.ElementType>  {
    as?: C;
    children: React.ReactNode;
}

type LinkProperties<C extends React.ElementType> = {
    as?: C;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>

/**
 * Link
 * @function Link 
 * @param {string} as - sets the type of the element
 * @param {children} ReactNode - set any Link children
 * @returns {JSX.Element}
 */

export const Link = <C extends React.ElementType>({
    as,
    children,
    ...rest
}: LinkProperties<C>) => {

    const PolyComponent = as || "span";

    return <PolyComponent {...rest}>{ children }</PolyComponent>
}