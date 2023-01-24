import defaultTheme, { 
    ThemeProps, 
    ColorType, 
    ColorIndex,
    FontSize 
} from '../styles/theme';

// Falls back to default theme when required
function getTheme(props: ThemeProps) {
    return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(
    type: ColorType,
    index: ColorIndex,
    props: ThemeProps
) {
    return getTheme(props).colors[type][index]; 
}

export function getFontSize(
    fontSize: FontSize,
    props: ThemeProps
) {
    return getTheme(props).fontSize[fontSize];
}