import { ThemeProps } from "../styles/theme";

// Resolver to test if we want a curried function or not depending on the
// number of arguments passed in.
export type Resolver<T> = (props: ThemeProps) => T;

export type OmitThemeProp<Args extends any[]> = Args[3] extends ThemeProps
    ? [Args[0], Args[1], Args[2]]
    : Args[2] extends ThemeProps
    ? [Args[0], Args[1]]
    : [Args[0]];