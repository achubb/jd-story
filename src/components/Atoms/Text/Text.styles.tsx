import styled from 'styled-components';
import { TextProps } from './Text';
import { theme } from '../../utils';


// Note that the 'p' element type is ignored when the 'as' prop is used
export const Text = styled.p<TextProps>`
    display: block;
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.7;
    color: ${({textColor}) => theme.textColor(textColor, {})};
    font-size: ${({fontSize}) => theme.fontSize(fontSize, {})};
    text-align: ${({align}) => theme.textAlign(align, {})};
`;