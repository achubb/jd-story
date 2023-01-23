import React, { FC } from "react";
import { StyledSimpleCard } from "./SimpleCard.styles";
import Heading from "../../Atoms/Heading/Heading";
import Text from "../../Atoms/Text";

/**
 * Simple Card
 * @function SimpleCard
 * @param {children} ReactNode - set any card children
 * @returns {JSX.Element}  - Rendered SimpleCard
 */

const SimpleCard: FC = () => {
    return (
        <StyledSimpleCard>
            <Heading>Card Heading</Heading>
            <Text>Here is some card text...</Text>
        </StyledSimpleCard>
    )
} 

export default SimpleCard;