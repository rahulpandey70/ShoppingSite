import {css} from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        ${props}
    }
    `;
};

export const tablets = (props) => {
    return css`
    @media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
        ${props}
    }
    `;
};

export const ipads = (props) => {
    return css`
    @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
        ${props}
    }
    `;
};

export const ipadsPro = (props) => {
    return css`
    @media only screen and (min-device-width: 1025px) and (max-device-width: 1366px) {
        ${props}
    }
    `;
};

export const laptop = (props) => {
    return css`
    @media only screen and (min-device-width: 1367px) and (max-device-width: 1760px) {
        ${props}
    }
    `;
};

export const largeScreen = (props) => {
    return css`
    @media only screen and (min-device-width: 1760px) and (max-device-width: 1920px) {
        ${props}
    }
    `;
};