import { useContext, useMemo } from "react"
import { ThemeContext } from "styled-components";
import { ThemeProps } from "../styles/theme";

import { getColor } from "./getters";
import { OmitThemeProp } from "./types";

function createPartialGetter<T extends (...args: any) => any>(
    getter: T,
    props: ThemeProps
) {
    return function x(...args: OmitThemeProp<Parameters<T>>): ReturnType<T> {
        return getter(...args, props);
    };
}
  
export default function useTheme() {
    const theme = useContext(ThemeContext);
    const themeProps = { theme };
  
    return {
        color: createPartialGetter(getColor, themeProps),
    };
}
