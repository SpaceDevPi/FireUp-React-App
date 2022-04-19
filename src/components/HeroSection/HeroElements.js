import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";


export const HeroContainer = styled.div`
    background: #EDEDEB;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    top: -18px;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #EDEDEB;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #0c0c0c;

`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 55%;

`;

export const HeroH1 = styled.h1`
    color: rgb(45, 55, 72);
    font-size: 80px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

    @media screen and (max-width: 500px) {
        font-size: 34px;
    }

`;

export const HeroP = styled.p`
    color: rgb(45, 55, 72);
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
`;