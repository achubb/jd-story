import styled from 'styled-components';
import { TextProps } from './Text';
// import fontSizes from '../../foundations/typography';
import { theme } from '../../utils';

// TODO: Move this somewhere else & make dynamic
// const typography = {
//     fontSizes: {
//         xs: "0.75rem",
//         sm: "0.875rem",
//         md: "1rem",
//         lg: "1.125rem",
//         xl: "1.25rem"
//     }
// }

// type FontSize = keyof typeof fontSizes

// const getFontSize = (size: FontSize) => fontSizes[size];




export const P = styled.p<TextProps>`
    text-align: ${({ align }) => align};
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.7;
    color: ${theme.color("secondary", 9)};
    font-size: ${({fontSize}) => theme.fontSize(fontSize)};
`;