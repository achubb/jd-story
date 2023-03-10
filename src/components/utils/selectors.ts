import { ThemeProps } from "../styles/theme";
import { getColor, getFontSize, getTextColor, getTextAlign } from "./getters";

import { OmitThemeProp, Resolver } from "./types";

function createSelector<T extends (...args: any) => any>(getter: T) {

    // Without any props
    function select(
        ...args: OmitThemeProp<Parameters<T>>
    ): Resolver<ReturnType<T>>;

    // With props
    function select(
        ...args: Parameters<T>
    ): ReturnType<T>;

    function select(
        ...args: any
    ): any {
        // if user passed in the same number of arguments
        // apply the function straight away
        if (args.length === getter.length) {
            return getter(...args);
        }
        // return a curried version
        return (props: ThemeProps) => getter(...args, props);
    }

    return select;
}

// Actual Selectors
export const color = createSelector(getColor);
export const fontSize = createSelector(getFontSize);
export const textAlign = createSelector(getTextAlign);
export const textColor = createSelector(getTextColor);