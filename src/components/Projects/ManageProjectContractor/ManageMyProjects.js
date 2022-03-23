import React from 'react'
import { useApi } from "../../../hooks/useApi";
import { queryApi } from "../../../utils/queryApi";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function ManageMyProjects() {
    const navigate = useNavigate();

    const [projects,err,reload] = useApi('project/contractor-projects/1');
    const deleteProject= async (id)=>{
        const[,err] = await queryApi('project/deleteproject/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else await reload();
    }

    
  return (   <>


            <div className="mt-5">


                <div className="container">
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Manage My Projects</h1>

                    <div className="add_btn mt-2 mb-2">
                        <NavLink to='/addproject' className="btn btn-primary">Add A Project</NavLink >
                    </div>

                                    <table class="table">
                                        <thead>
                                            <tr className="table-dark">
                                                <th scope="col">Title</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Amount to collect </th>
                                                <th scope="col">Collected Aount</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        { projects  ?  (
                                projects.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td scope="row">{element.title}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount_to_collect} $</td>
                                                
                                                
                                                {(() => {
                                                if (element.collected_amount!=null){
                                                    return (
                                                        <td>{element.collected_amount } $</td>
                                                    )
                                                }
                                                else
                                                return <td>0 $</td>
                                                })()}

                                                <td>{ (new Date(element.end_date)).toLocaleDateString()}  </td>

                                                <td className="d-flex justify-content-between">
                                          <button className="btn btn-success"  onClick={()=>navigate('/explore/projectdetail/'+element._id)}><RemoveRedEyeIcon /></button>
                                                     <button className="btn btn-primary" onClick={()=>navigate('/editproject/'+element._id)}><CreateIcon /></button>
                                                    <button className="btn btn-danger"   onClick={() => deleteProject(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })) : ( <p> You have not projects yet </p>)
                            }                    
                                        </tbody>
                                    </table>


                </div>
            </div>
        </>
    )
}
