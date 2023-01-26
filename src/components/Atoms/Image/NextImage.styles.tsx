import styled from "styled-components";
import { NextImageProps } from "./NextImage";
import { theme } from '../../utils';

export const Image = styled.div<NextImageProps>`
    border: 3px solid red;
    position: relative;
    height: 20rem;
`