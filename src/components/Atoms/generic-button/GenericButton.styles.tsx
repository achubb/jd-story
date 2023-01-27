import styled, { css, keyframes } from 'styled-components';
import { Props } from './GenericButton';

// Default State
const defaultButton = css`
    background: #000000;
`;

// Hovered State
const hoveredButton = css`
    opacity: 0.95;
    transform: translateY(-2px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
`;

// Focused State
const focusedButton = css`
    &:focus-visible {
        box-shadow: 0 0 0 3px #ffa500;
    }
`;

// Disabled Button State
const disabledButton = css`
    opacity: 0.5;
    background: dark: 'rgba(48,49,51,.774)';
    cursor: not-allowed;
`;

// Active Button State
const activeButton = css`
    transform: scale(0.97);
`;

const loadingKeyframes = keyframes`
    0% {
        transform: translateX(25px);
    }
    100% {
        transform: translateX(-20px);
    }
`;

// Loading Button State
const movingGradient = css`repeating-linear-gradient(60deg,
    transparent,
    transparent 10px,
    #1daa87 10px,
    #1daa87 20px)
`;

const loadingButton = css`
    &::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: -100%;
        width: 300%;
        height: 100%;
        background: #43d5b0
            ${movingGradient};
        animation: ${loadingKeyframes} 2s infinite linear;
    }

    & > span {
        opacity: 0.5;
    }

    cursor: wait;
`;

// Completed Button State
const completedButton = css`
    background: #43d5b0;
    cursor: default;
`;

// Base Styles
export const StyledButton = styled.button<Props>`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1.25rem;
    font-weight: 400;
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    outline: none;
    text-shadow: rgb(0 0 0 / 15%) 1px 1px 1px;
    transition: 0.3s all ease;

    ${(p) => !p.isLoading && defaultButton};

    &:hover {
        ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
    }

    &:focus {
        ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
    }

    &:active {
        ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && activeButton};
    }

    ${(p) => p.isLoading && loadingButton};

    &:disabled {
        ${disabledButton};
    }

    ${(p) => p.isCompleted && completedButton};

    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`;