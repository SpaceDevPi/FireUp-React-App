import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: rgb(255, 255, 255);
    height: 80px;
    margin-bottom: 20px;
    margin-top: 10px;
    -moz-box-shadow:0 5px 5px rgba(182, 182, 182, 0.75);
    -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((50vw - 600px) / 2);
    z-index: 10;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
    color: rgb(45, 55, 72);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    &.active {
        color: #F57C00;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: rgb(45, 55, 72);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #F57C00;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #E65100;
        color: #FFF3E0;
    }
`;