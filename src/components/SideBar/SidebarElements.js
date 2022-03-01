import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR} from "react-router-dom";
import styled from "styled-components";


export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    z-index: 999;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #F57C00;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.8rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWarpper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 500px) {
        grid-template-rows: repeat(6, 50px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: rgb(45, 55, 72);
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #F57C00;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #F57C00;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #F57C00;
    }
`;
