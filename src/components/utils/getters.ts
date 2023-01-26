import defaultTheme, { 
    ThemeProps, 
    ColorType, 
    ColorIndex,
    FontSize, 
    TextAlign,
    TextColor
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
    fontSize: FontSize = 'md',
    props: ThemeProps
) {
    return getTheme(props).fontSize[fontSize];
}

export function getTextAlign(
    textAlign: TextAlign = 'left',
    props: ThemeProps
) {
    return getTheme(props).textAlign[textAlign];
}

export function getTextColor(
    textColor: TextColor = 'primary',
    props : ThemeProps
) {
    return getTheme(props).textColor[textColor];
}