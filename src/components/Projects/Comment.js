import React from 'react'
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

const Comment = () => {
    return (
        <>
        <Container>
                <CommentHeading>Comment / 2</CommentHeading>
                <CommentWrap>
                    <Row>
                        <Img src='/images/c_1.png' alt='#' />
                        <Col>
                            <CHeading>Veninam</CHeading>
                            <PostDate>Posted: 06/06/2021</PostDate>
                            <CommentText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</CommentText>
                        </Col>
                        <ButtonReply to='/'>Reply</ButtonReply>
                    </Row>
                    <Row>
                        <Img src='/images/c_2.png' alt='#' />
                        <Col>
                            <CHeading>Veninam</CHeading>
                            <PostDate>Posted: 06/06/2021</PostDate>
                            <CommentText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</CommentText>
                        </Col>
                        <ButtonReply to='/'>Reply</ButtonReply>
                    </Row>
                    <PHeading>POST : Your Comments</PHeading>
                    <Form>
                    
                        <TextArea type='textarea' placeholder='Comment..' />
                        <BtnWrap>
                            <BtnLink to='/'>Send</BtnLink>
                        </BtnWrap>
                    </Form>
                </CommentWrap>
                </Container>
        </>
    )
}

export default Comment


const Container = styled.div``;


export const CommentSection = styled.div`
    padding-top:7rem;
    padding-bottom:3rem;
    margin-top:5rem;
`
export const CommentHeading = styled.h1`
    font-size:2rem;
    padding:2rem 5%;
`
export const CommentWrap = styled.div`
    padding:1rem 5%;
    width:85%;
`
export const Row = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:2rem;
    margin-top:2rem;
    border-top:.1rem solid #000;

    @media (max-width:768px){
        flex-direction:column;
        align-items:center;
        text-align:center;
        margin-bottom:6rem;
    }
`
export const Col =styled.div`
    flex 1 1 50%;
`
export const Img = styled.img`
    max-width:50%;
    height:auto;
    padding-top:2rem;
`
export const CHeading = styled.h2`
    color:#333;
    font-size:1rem;
    font-weigth:700;
    padding-top:2rem;
`
export const PostDate = styled.h4`
    color:#F54748;
    font-size:1.2rem;
    font-weigth:500;
    margin-bottom:1rem;
`
export const CommentText = styled.p`
    color:#827f7f;
    font-size:1.2rem;
    line-height:2rem;
`
export const ButtonReply = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    &:hover{background:#000;color:#fff}
`
export const PHeading = styled.h2`
     color:#333;
    font-size:2rem;
    font-weigth:700;
    padding:3rem;
    text-align:center;
    text-decoration:underline;
`
export const Form = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const Input = styled.input`
    width:50%;
    height:5rem;
    padding:1rem 2rem;
    font-weigth:400;
    font-size:1.8rem;
    border:1px solid #767575;
    margin:1rem 1rem;

    &:active,
    &:focus{
        outline:none;
        color:#7675775;
    }
    @media (max-width:768px){width:90%}
`
export const TextArea = styled.textarea`
    width:50%;
    height:15rem;
    padding:1rem 2rem;
    font-weigth:400;
    font-size:1.8rem;
    border:1px solid #767575;
    margin:1rem 1rem;

    &:active,
    &:focus{
        outline:none;
        color:#7675775;
    }
    @media (max-width:768px){width:90%}
`
export const BtnWrap = styled.div`
    width:100%;
    display:flex;
    margin-top:2rem;
    justify-content:center;
`
export const BtnLink = styled(LinkS)`
    background:#F57C00;
    color:#fff;
    font-size:1.5rem;
    padding:1rem 3rem;
    text-align:center;
    border-radius:.5rem;
    cursor:pointer;

    &:hover{
        background:#000;
        transition:0.2s;
        color:#fff;
    }
`