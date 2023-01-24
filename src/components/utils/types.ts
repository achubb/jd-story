import { ThemeProps } from "../styles/theme";

export type OmitThemeProp<Args extends any[]> = Args[2] extends ThemeProps
    ? [Args[0], Args[1]]
    : [Args[0]];