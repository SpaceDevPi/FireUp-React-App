import React, { useEffect } from 'react'
import { useApi } from "../../../hooks/useApi";
import { queryApi } from "../../../utils/queryApi";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useSelector } from 'react-redux';

export default function ManageMyProjectsLives() {
    const navigate = useNavigate();
    const { entrepreneur } = useSelector((state) => state.auth);

    

    const [projects,err,reload] = useApi('projectlive/ProjectLiveBycontractor/' + entrepreneur._id);
   console.log(projects)
    const deleteProject= async (id)=>{
        const[,err] = await queryApi('projectlive/deleteProjectLive/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else await reload();
    }

    
  return (   <>


            <div className="mt-5">


                <div className="container">
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Manage My Planned Live </h1>
<br></br>
                    <div style={{display: 'flex',  justifyContent:'space-between'}}>
                    <NavLink to='/managemyprojects' className="btn btn-success">My Published Projects</NavLink >

                    </div>
    <br></br>
                                    <table class="table">
                                        <thead>
                                            <tr className="table-dark">
                                                <th scope="col">Link</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">State </th>
                                                <th scope="col"> </th>


                                            </tr>
                                        </thead>
                                        <tbody>

                                        { projects  ?  (
                                projects.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td scope="row">{element.link}</td>
                                                <td> { (new Date(element.date)).toLocaleDateString()} </td>
                                                <td style={{color:'#146c43',fontWeight: 'bold'}}>{element.state} </td>
                                                
                                                
                                           

                                                <td className="d-flex justify-content-between">
                                                
                                                    
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })) : ( <p> You have not projects planned yet </p>)
                            }                    
                                        </tbody>
                                    </table>


                </div>
            </div>
        </>
    )
}
