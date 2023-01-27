import React, { FC } from "react";
import { StyledSimpleCard } from "./SimpleCard.styles";
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";
import NextImage from "../../atoms/image/NextImage";

/**
 * Simple Card
 * @function SimpleCard
 * @param {children} ReactNode - set any card children
 * @returns {JSX.Element}  - Rendered SimpleCard
 */

const SimpleCard: FC = () => {
    return (
        <StyledSimpleCard>
            <NextImage fill></NextImage>
            <Heading as='h3'>Card Heading</Heading>
            <Text>Here is some card text...</Text>
        </StyledSimpleCard>
    )
} 

export default SimpleCard;