import { useContext, useMemo } from "react"
import { ThemeContext } from "styled-components";
import { ThemeProps } from "../styles/theme";

import { getColor, getTextColor, getFontSize, getTextAlign } from "./getters";
import { OmitThemeProp } from "./types";

function partialGetter<T extends (...args: any) => any>(
    getter: T,
    props: ThemeProps
  ) {
    return function x(...args: OmitThemeProp<Parameters<T>>): ReturnType<T> {
      return getter(...args, props);
    };
  }
  
export default function useTheme() {
    const theme = useContext(ThemeContext);
    
    return useMemo(() => {
        const themeProps = { theme };

        return {
            textColor: partialGetter(getTextColor, themeProps),
            color: partialGetter(getColor, themeProps),
            fontSize: partialGetter(getFontSize, themeProps),
            textAlign: partialGetter(getTextAlign, themeProps)
        };
    }, [theme]);
}
