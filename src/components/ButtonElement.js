import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button=styled(Link)`
    border-radius: 50px;
    background-color: #F57C00;
    white-space: nowrap;
    padding: ${({big}) => (big ? "16px 64px" : "16px 32px")};
    color: ${({dark}) => (dark ? "#010606" : "#fff")};
    font-size: ${({fontBig}) => (fontBig ? "1.2rem" : "1.0rem")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #F57C00;
    }
`;