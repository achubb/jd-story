const palette = {
    brandPrimary: "#000000",
    brandSecondary: "#43d5b0"
}

// Tokens
const theme = {
    colors: {
        primary: [
            "hsl(205, 79%, 97%)",
            "hsl(205, 97%, 85%)",
            "hsl(205 ,84%, 74%)",
            "hsl(205 ,74%, 65%)",
            "hsl(205, 65%, 55%)",
            "hsl(205, 67%, 45%)",
            "hsl(205, 76%, 39%)",
            "hsl(205, 82%, 33%)",
            "hsl(205, 87%, 29%)",
            "hsl(205, 100%, 21%)",
        ],
        secondary: [
            "hsl(171, 82%, 96%)",
            "hsl(172, 97%, 88%)",
            "hsl(174, 96%, 78%)",
            "hsl(176, 87%, 67%)",
            "hsl(178, 78%, 57%)",
            "hsl(180, 77%, 47%)",
            "hsl(182, 85%, 39%)",
            "hsl(184, 90%, 34%)",
            "hsl(186, 91%, 29%)",
            "hsl(188, 91%, 23%)",
        ],
    },
    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
    },
    textAlign: {
        left: "left",
        center: "center",
        right: "right"
    },
    textColor: {
        primary: palette.brandPrimary,
        secondary: palette.brandSecondary
    }
};

// Entire structure of the theme object
export type Theme = typeof theme;

// Props that will later be injected into styled-components
export type ThemeProps = { theme?: Theme };

// 'primary' and 'secondary colours
export type ColorType = keyof Theme["colors"];

// the 9 possible shades of a color
export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Export the font sizes
export type FontSize = keyof Theme["fontSize"];

// Export the text alignments
export type TextAlign = keyof Theme["textAlign"];

// Export the palette
export type TextColor = keyof Theme["textColor"];

export default theme;