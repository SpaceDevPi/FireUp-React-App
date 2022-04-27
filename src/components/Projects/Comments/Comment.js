import React, { useEffect } from 'react'
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { useApi } from '../../../hooks/useApi';
import { textTransform } from '@mui/system';

const Comment = ({comment,replies,currentUserId,parentId ="null",addComment,updateComment, setActiveComment,
    activeComment,projectid ,deleteComment}) => {
console.log("projetcttttttttt id + " + projectid)

const [project,err,reload] = useApi('project/project/' + projectid);

useEffect( () => {
     }, [comment.id_user]);

const [contractorInfo] = useApi('entrepreneurs/' + comment.id_user);
const [investorInfo] = useApi('investors/investorId/' +  comment.id_user);
console.log( investorInfo)
console.log( contractorInfo)


var userName 
if (investorInfo!=null)
{
  userName = investorInfo.firstName+ " "+investorInfo.lastName
}
else 
if(contractorInfo!=null)
{
  userName = contractorInfo.firstname + " "+contractorInfo.lastname
}

console.log( project)

var CommentBadge = false
if(project !=null){
if (project.contractor_id==comment.id_user)
CommentBadge=true
}

      const { entrepreneur } = useSelector((state) => state.auth);

            console.log("current user id "+currentUserId)
        const isEditing =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "editing";
  const isReplying = activeComment && activeComment.id === comment._id &&
    activeComment.type === "replying";

    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.date) > fiveMinutes;
    const canReply = Boolean(currentUserId) && comment.parentId==="null";

    let canEdit = false
    let canDelete = false
    if(comment.id_user===currentUserId )
    {
        canEdit = true
        canDelete = true
    }
    // const canEdit = currentUserId === comment.id_user && !timePassed;
    // const canDelete = currentUserId === comment.id_user && replies.length === 0 && !timePassed;

  

  const replyId = parentId ? parentId : comment._id;
    return (
        <>

        <div key={comment.id}   class="container">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

                <CommentWrap>
                    <Row>
                        
                    <Img src='/c_1.png' alt='#' />
                        <Col>
                     
                        {/* <CHeading>   <Badge badgeContent="Project Owner" color="primary"/></CHeading>  */}
                            <CHeading> User : <a style={{ textTransform: 'capitalize'}}>{userName}</a>                         {CommentBadge &&  (<span class="w3-tag w3-orange">Project Owner</span>)} 

</CHeading> 
                            <PostDate>Posted: {new Date(comment.date).toLocaleDateString()} at {new Date(comment.date).getHours()}:{new Date(comment.date).getMinutes()} </PostDate>
                            {/* <div className="comment-text">{comment.content}
                         </div> */}
                          {!isEditing &&    <CommentText>{comment.content}</CommentText>}
                       {   isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.content}
            handleSubmit={(text) => updateComment( comment._id,text ,comment.id_user,comment.parentId)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
                        </Col>

                        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "replying" })   }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editing" })   }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
        </div>
            
                        {/* <ButtonReply to='/'>Reply</ButtonReply>                         */}
                        {isReplying && (
          <CommentForm
            submitLabel="Reply"  parentIdd={replyId} handleSubmit={(text) => addComment(text,currentUserId, comment._id)}
          />
        )}
      
                        <Col>
                                    {replies.length > 0 && (
                   <div className="replies">
                       <h5  style={{ color: '#F57C00' }}>Réponse</h5>
                                    {replies.map((reply) => (
                                        
                                        <Comment
                                            comment={reply}
                                            key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                // addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
                                           />
                                    ))}        
                                       </div>  )}

                            </Col>
                                
                    </Row>
          
                </CommentWrap>
                </div>
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
    width:100%;
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