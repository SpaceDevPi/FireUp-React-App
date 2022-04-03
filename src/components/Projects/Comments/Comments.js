import React,{ useState, useEffect } from 'react'
import { useApi } from "../../../hooks/useApi";
import "./Comment.css"
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'
import { queryApi } from '../../../utils/queryApi';
import { useParams } from 'react-router-dom';

export default function Comments({currentUserId,projectid}) {


    const [newcomments,err,reload] = useApi("comments/" + projectid);

    // const [comments,err,reload] = useApi('comments/623314d717a15abd9734c65c',null, "GET",false);
    // console.log("projectid 1 : "+projectid)
    const [test,setTest]= useState(false)
    const [num,setNum]= useState(0)
    const [activeComment, setActiveComment] = useState(null);
    const[nbComment,setnbComment]=useState(0)
    const [comments,setComments]= useState(null)
    async function fetchData() {
      console.log("aaaaaaa")
      
      const [res, err] = await queryApi("comments/" + projectid);
      console.log(res)
      setComments(res);
        setnbComment(res.length)
        setNum(num+1)

      if(comments !=null)
      { if(num>=1){
        setTest(true)
      } }
    }
    useEffect( () => {
      fetchData()
         }, [projectid,test]);
         console.log("comments: "+comments)

  


        let rootComments
            if(comments!=null)

            {
          rootComments = comments.filter(
            (comment) => comment.parentId === "null"
          );
            }


    const getReplies = (commentId) =>
    comments
      .filter((comments) => comments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      console.log("projectid 2 : "+projectid)


     
       
//   const rootComments = backendComments.filter(
//     (backendComment) => backendComment.parentId === null
//   );
console.log("projectid  : "+projectid)
    //   console.log("backendComments: "+backendComments)


    const deleteComment= async (id)=>{
        if (window.confirm("Are you sure you want to remove comment?")) {
        const[,err] = await queryApi('comments/deletecomment/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else {

            const updatedBackendComments = comments.filter(
                (backendComment) => backendComment._id !== id
              );
              setComments(updatedBackendComments);
        }}
    }

    const [showLoader, setShowLoader] = useState(false);
const [error, setError] = useState({ visible: false, message: "" });

    const addComment= async ( content ,id_user,parentId)=>{
        let formData = {content ,id_user,parentId}
        setShowLoader(true);

        const [res, err] = await queryApi("comments/newcomment/"+projectid, formData, "POST", false)
        if (err) {
            setShowLoader(false);
            setError({
              visible: true,
              message: JSON.stringify(err.errors, null, 2),
            });
        console.log("formmm"+formData)
          } 
          else    { 
            setComments([res,...comments]);
            setnbComment(nbComment+1);

            setActiveComment(null);
       
        }
    }


    const updateComment= async ( id,content ,id_user,parentId)=>{
        let formData = {  id,content ,id_user,parentId}
        setShowLoader(true);

        const [res, err] = await queryApi("comments/updatecomment/"+id, formData, "PUT", false)
        if (err) {
            setShowLoader(false);
            setError({
              visible: true,
              message: JSON.stringify(err.errors, null, 2),
            });
        console.log("err"+err)

        console.log("formmm update"+formData)

          } 
          else    { 
            const updatedBackendComments = comments.map((backendComment) => {
                if (backendComment._id === id) {
                  return { ...backendComment, content: content };
                }
                return backendComment;
              });
              setComments(updatedBackendComments);
              setActiveComment(null);
            
            // setComments([res,...comments]);
            // setActiveComment(null);
            // window.location.reload()
        }
    }

    

  return (
    <>                <CommentHeading>Comment Section ({nbComment} total)</CommentHeading>
    <div className="comments">
    <CommentForm  activeComment={activeComment}
            setActiveComment={setActiveComment}  currentUserId={currentUserId} submitLabel="Write" updateComment={updateComment} handleSubmit={addComment} projectid={projectid} />

          <div className="comments-container">
              {rootComments ? rootComments.map((comments) => (
                  <>
                  <Comment addComment={addComment} deleteComment={deleteComment} projectid ={projectid} currentUserId={currentUserId} key={comments._id}
            comment={comments}   replies={getReplies(comments._id)}  activeComment={activeComment}
            setActiveComment={setActiveComment} updateComment={updateComment} /></>

              )) : <h1>comments not found</h1>}
          </div>
      </div></>
    
  )
}
export const CommentHeading = styled.h1`
    font-size:2rem;
    padding:2rem 5%;
`



export const CommentSection = styled.div`
    padding-top:7rem;
    padding-bottom:3rem;
    margin-top:5rem;
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