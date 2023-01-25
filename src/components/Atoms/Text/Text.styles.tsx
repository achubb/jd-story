import styled from 'styled-components';
import { TextProps } from './Text';
import { theme } from '../../utils';

export const P = styled.p<TextProps>`
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.7;
    color: ${({textColor}) => theme.textColor(textColor)};
    font-size: ${({fontSize}) => theme.fontSize(fontSize)};
    text-align: ${({align}) => theme.textAlign(align)};
`;