import styled from "styled-components";
import { HeaderProps } from './Heading';
import { theme } from '../../utils';

export const Heading = styled.h2<HeaderProps>`
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    color: ${({textColor}) => theme.textColor(textColor, {})};
    font-size: ${({fontSize}) => theme.fontSize(fontSize, {})};
    text-align: ${({align}) => theme.textAlign(align, {})};
`;