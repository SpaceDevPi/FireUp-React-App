

import React from 'react'
import { useApi } from "../../../hooks/useApi";
import { queryApi } from "../../../utils/queryApi";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useSelector } from 'react-redux';

export default function ManageProjectsWaitingForConfirmation() {
    const navigate = useNavigate();
    const { entrepreneur } = useSelector((state) => state.auth);
    const [projects,err,reload] = useApi('project/getProjectsToApproveBycontractorId/'+ entrepreneur._id);
    const deleteProject= async (id)=>{
        const[,err] = await queryApi('project/deleteproject/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else await reload();
    }

    
  return (   <>


            <div className="mt-5">


                <div className="container">
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>My Projects Waiting For Confirmation </h1>
<br></br>
                    <div style={{display: 'flex',  justifyContent:'space-between'}}>
                    <NavLink to='/managemyprojects' className="btn btn-success">My Published Projects</NavLink >

                        <NavLink to='/addproject' className="btn btn-primary">Add A Project</NavLink >
                        <NavLink to='/managemyprojects/ManageProjectsWaitingForConfirmation' className="btn btn-success">Projects awaiting confirmation  </NavLink >
                        <NavLink to='/managemyprojects/ManageRefusedProjects' className="btn btn-danger">Consult my refused projects </NavLink >

                    </div>
    <br></br>
                                    <table class="table">
                                        <thead>
                                            <tr className="table-dark">
                                                <th scope="col">Title</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Amount to collect </th>
                                                <th scope="col">Remaining amount</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col">Confirmation Status</th>
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
                                                if (element.montantRestant!=-1){
                                                    return (
                                                        <td style={{color:'#b02a37',fontWeight: 'bold'}}>{element.montantRestant } $</td>
                                                    )
                                                }
                                                else
                                                return <td style={{color:'#b02a37',fontWeight: 'bold'}}>0 $</td>
                                                })()}

                                                <td>{ (new Date(element.end_date)).toLocaleDateString()}  </td>
                                                <td style={{color:'#b02a37',fontWeight: 'bold'}}>WAITING FOR CONFIRMATION  </td>

                                                <td className="d-flex justify-content-between">
                                                <button className="btn btn-success"  onClick={()=>navigate('/AllProjectInvestor/projectdetail/'+element._id)}><RemoveRedEyeIcon /></button>
                                                     <button className="btn btn-primary" onClick={()=>navigate('/editproject/'+element._id)}><CreateIcon /></button>
                                                    <button className="btn btn-danger"   onClick={() => deleteProject(element._id)}><DeleteOutlineIcon /></button>
                                                    {/* <button className="btn btn-primary"  onClick={()=>navigate('/managemyprojects/createpost/'+element.title +'/'+element._id)}><PostAddIcon /></button> */}
                                                    <button className="btn btn-primary"  onClick={()=>navigate('/managemyprojects/managemyposts/'+element.title +'/'+element._id)}><PostAddIcon /></button>

                                                    
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
