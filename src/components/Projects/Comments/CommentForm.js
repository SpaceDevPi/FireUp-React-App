import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { queryApi } from "../../../utils/queryApi";
import { BtnLink, BtnWrap, Form, TextArea } from "./Comment";
import "./Comment.css"

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  projectid,
  comments,
  setComments,
  setActiveComment,
  activeComment ,currentUserId,
  parentIdd,
  updateComment
}) => {
 

  const [formData, setFormData] = useState({
    content:initialText,
    // id_project: {projectid},
    id_user:currentUserId,
    parentId:"null"
,
});


let {content ,id_user,parentId} = formData

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  


const onSubmit = async (e) => {
  e.preventDefault();
  handleSubmit(formData.content,formData.id_user,formData.parentId);
  setFormData({content:"",
  // id_project: {projectid},
  id_user:currentUserId,
  parentId:"null"})
  console.log("formData  "+formData.parentId);

  // setActiveComment(null)
 
};


  const isTextareaDisabled = content.length === 0;

  return (
      <div class ="container ">
    <form onSubmit={onSubmit}>
    <textarea
      className="comment-form-textarea"
      name="content"value={content} id="content"  onChange={(e) => onChange(e)}   placeholder="Write a comment"
    />
    {/* <input type="hidden"  name="id_project"  value={id_project}  onChange={(e) => onChange(e)}  ></input> */}
    <button className="comment-form-button" disabled={isTextareaDisabled}>
      {submitLabel}
    </button>
    {hasCancelButton && (
      <button
        type="button"
        className="comment-form-button comment-form-cancel-button"
        onClick={handleCancel}
      >
        Cancel
      </button>
    )}
  </form>
  </div>
  );
};

export default CommentForm;