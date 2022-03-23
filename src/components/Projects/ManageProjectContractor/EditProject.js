import React ,{ useEffect, useState }  from "react";
import { NavLink, useParams } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import styled from "styled-components";
import "./CreateProject.css";
import { queryApi } from '../../../utils/queryApi';
import { useNavigate } from "react-router-dom";

export default function EditProject() {

    const navigate = useNavigate();
    const {id} = useParams();

  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email : "",
    end_date: "",
    amount_to_collect: "",
    images: "",
    offering_type: "",
    category: "",
    price_per_share: "",
    place:""

  });

  useEffect(()=>{
    async function fetchProject() {
      const [res,err] = await queryApi('project/project/'+id);
      if(res){
        setFormData({title:res.title, description:res.description, email:res.email,end_date:res.end_date,amount_to_collect:res.amount_to_collect,images:res.images, offering_type:res.offering_type,category:res.category,price_per_share:res.price_per_share,place:res.place})
      }
      else console.log(err)
    }
    fetchProject();
  },[id])



  const { title , description, email,end_date,amount_to_collect, offering_type,category,price_per_share,place} = formData;


  const onChangeFile = (e) =>
  setFormData({ ...formData, images: e.target.File[0] });

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async (e) => {
  e.preventDefault();
  setShowLoader(true);
  const [, err] = await queryApi("project/updateproject/" +id, formData, "PUT", false);
  if (err) {
    setShowLoader(false);
    setError({
      visible: true,
      message: JSON.stringify(err.errors, null, 2),
    });
    console.log(err)

    console.log(formData)
    console.log(err)
  } else    { console.log(formData);
    setTimeout(()=>{
     alert('your project has been edited succesfully')

    });
}
};
let date_modified
if(end_date!=null)
 date_modified =  new Date(end_date).toLocaleDateString('en-CA')

// const date_modified = end_date.toISOString().split('T')[0]
console.log("modifie "+date_modified)
  return (
  <>
    <Container>
    <div className="container">

    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Edit Project</h1>

            {/* <NavLink to="/">home2</NavLink> */}

            <form className="mt-5"  onSubmit={onSubmit}>
                <div className="row">

                    <div class="row" >
                    {error.visible && <FormError>{error.message}</FormError>}

                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text"  name="title"value={title}  onChange={(e) => onChange(e)} placeholder="Name of your project " class="form-control"   />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" placeholder="john@gmail.com" name="email" value={email}  onChange={(e) => onChange(e)}class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Date of end</label>
                        <input type="date" value={date_modified} name="end_date" onChange={(e) => onChange(e)}  placeholder="date of end" class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Amount to collect</label>
                        <input type="number" name="amount_to_collect" value={amount_to_collect}  onChange={(e) => onChange(e)} placeholder="How much money you need to raise "class="form-control"  />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Offering type</label>
                        <div className="newUserGender">
                        <input type="radio" name="offering_type" id="equity" value={offering_type} />
                        <label for="equity">Equity</label>
                        <input type="radio" name="offering_type"  id="rewards" value={offering_type} />
                        <label for="rewards">Rewards</label>
                        <input type="radio" name="offering_type"  id="donation" value={offering_type} />
                        <label for="donation">Donation</label>
                        </div>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Category</label>
                        <div className="newUserGender">

                        <input type="radio" name="category" id="art" value={category} />
                        <label for="equity">art</label>
                        <input type="radio" name="category" id="agriculture" value={category} />
                        <label for="rewards">agriculture</label>
                        <input type="radio" name="category" id="design" value={category} />
                        <label for="donation">design</label> 
                              </div>
                  </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Price per share
</label>
                        <input type="text"  name="price_per_share" value={price_per_share}  onChange={(e) => onChange(e)} placeholder="price per share" class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Place</label>
                        <input type="text" name="place" value={place}  onChange={(e) => onChange(e)} placeholder="Place"  class="form-control" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea  name="description" value={description}  onChange={(e) => onChange(e)} placeholder="Describe your project"className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit"  disabled={showLoader} class="newUserButton">Edit </button>
                    <br></br>
                </div>
            </form>
        </div>
        </Container>
    </>
 )

}

const FormError = styled.p`
  color: #f74b1b;
`;


const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-shadow: 0 0 15px #ddd;
    background-color : #E5E5E5;

`;
