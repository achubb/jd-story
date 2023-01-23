import styled from "styled-components";
import { HeaderProps } from './Heading';

export const H3 = styled.h3<HeaderProps>`
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 3rem;
    text-align: ${({ align }) => align};
`;