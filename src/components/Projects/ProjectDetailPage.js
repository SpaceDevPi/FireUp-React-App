import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";

import Comment from "./Comments/Comment";
import { Link as LinkS } from "react-scroll";
import MoreDetailPage from "./MoreDetailPage";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import PostsPageByProject from "./PostsPageByProject";
import ReactPlayer from "react-player";
import Converter from "./Currency-converter/Converter";
import { queryApi } from '../../utils/queryApi';

export default function ProjectDetailPage(props) {
  const { id } = useParams();
  const history = useNavigate ();
  var currentUserId = 1;


  function investir() {
    history("/InvestementProject/" + id);
  }
  function BlockChain() {
    history("/Blockchain/" + id);
  }
  const a = "";
  let date;
  let date_modifier;
  const [toRender, err, reload] = useApi("project/project/" + id);

   const [projectInvestor,error,reloaded] = useApi('investement/getInvestmentsByProject/'+id);
  //  const [projectLive,errr,reloadd] = await queryA('projectlive/ProjectLiveByProjects/'+id);


   const [projectLive,setprojectLive]= useState(null)
  //  async function fetchData() {
  //    console.log("aaaaaaa")
     
  //    const [res, err] = await queryApi("projectlive/ProjectLiveByProjects/"+id);
  //    console.log(res)
  //    setprojectLive(res);
      

    
  //  }
  //  useEffect( () => {
  //    fetchData()
  //       }, [id]);

   var projectLiveLink
var projectLiveLink2
if(projectLive!=null)
{  console.log("link ")
console.log(projectLive.link)



  projectLiveLink=projectLive.link
  projectLiveLink2='"'+ "https://www.twitch.tv/zwave69" +'"'
  

   }else {  projectLiveLink="https://www.twitch.tv/tchizzz8"
   projectLiveLink2='"'+ projectLiveLink +'"'}



  if (projectInvestor == null) {
    var nbrINvestor = 0;
  } else {
    nbrINvestor = projectInvestor.length;
  }

  let projectid;
  if (toRender != null) {
    date = toRender.end_date;
    projectid = toRender._id;
    console.log("images " + toRender.images);
    if (toRender.montantRestant == -1) {
      var montantRestant = toRender.amount_to_collect;
    } else {
      montantRestant = toRender.montantRestant;
    }
  }
  date_modifier = new Date(date).toLocaleDateString();

const { investor } = useSelector((state) => state.auth);
const { entrepreneur } = useSelector((state) => state.auth);

if (investor != null){
  currentUserId= investor._id
}
else if(entrepreneur!=null)
{
  currentUserId= entrepreneur._id
}
// function websiteVisits(response) {
//   document.querySelector("#visits").textContent = response.value;
// }

  return (
    <div>
      <Converter></Converter>

      {/* <script async src="https://api.countapi.xyz/hit/projectdetail-1524/b921e75d-11d3-4eec-bbdf-ce0dac450dec?callback=websiteVisits"></script>

     <h1>This site has been visited <span id="visits"></span> times.</h1> */}
    <Container>
    {toRender  ? (

      <Wrapper>
        <ImgContainer>
          {/* <Image src={"../../images/"+toRender.images} /> */}
          <Image src={`http://localhost:5000/uploads/${toRender.images}`}/>     

        </ImgContainer>
        <InfoContainer>
          <Title>{toRender.title} </Title>
          <Desc>
          {toRender.description}
          </Desc>
          <Row>
          <Text> <h1> Money to raise : $ {toRender.amount_to_collect}</h1></Text>

          <RowStat>

         
          <h3>Remaining amount : $ {montantRestant} </h3> 

          <h3>Raised Money : $ {toRender.amount_to_collect - montantRestant } </h3> 
          <h3>Investors : {nbrINvestor} </h3>

         

          <h3>Offering Type :  {toRender.offering_type}</h3>
          <h3>Price per share :  {toRender.price_per_share}</h3>
          <h3 name="end_date" >End of collect : {date_modifier}</h3>

          
          </RowStat>

          <br/><br/>
          </Row>
          <div >
          <ButtonInvest onClick={investir}>Invest</ButtonInvest>
          <ButtonBlockChain onClick={BlockChain}> Blockchain</ButtonBlockChain>
          </div>
          <br/><br/>
          <FacebookShareButton
        url={`https://bpifrance-creation.fr/encyclopedie/financements/financement-participatif/crowdfunding-ou-financement-participatif-outil#:~:text=Le%20crowdfunding%20vous%20permet%20d,pour%20en%20retirer%20un%20revenu.`}
        quote={"Investissez dans un projet sur FireUp et garantissez votre avenir"}
        hashtag={"#FireUp"}
        description={"Fire Up"}
        className="Demo__some-network__share-button"
      >
        <br/>
        <FacebookIcon size={52} round /> Soutenez le projet en partageant sur Facebook 
      </FacebookShareButton>

      <br />
      <TwitterShareButton
        title={"test"}
        url={`https://bpifrance-creation.fr/encyclopedie/financements/financement-participatif/crowdfunding-ou-financement-participatif-outil#:~:text=Le%20crowdfunding%20vous%20permet%20d,pour%20en%20retirer%20un%20revenu.`}
        hashtags={["FireUp"]}
      >
        <TwitterIcon size={52} round />
        Soutenez le projet en partageant sur Twitter
      </TwitterShareButton>

        </InfoContainer>


      </Wrapper>
 ) : (
  <p>Product not found</p>
)}
    </Container>
    <MoreDetailPage/>
    

    <PostsPageByProject projectid={projectid}/>

    <Comments currentUserId={currentUserId} projectid={projectid} />
    <div className="container">
    <div className="player-wrapper">

    <ReactPlayer
    className="react-player"
    playing
    width="100%"
    height="100%"
              url="https://www.twitch.tv/tchizzz8"
              controls
              />

            </div></div>
    </div>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Stats = styled.div`
   {
    padding: 0 13.5px;
    padding-top: 0px;
    padding-right: 13.5px;
    padding-bottom: 0px;
    padding-left: 13.5px;
    max-width: 375px;
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }
`;
export const ButtonBlockChain = styled(LinkS)`
  color: #fff;
  background: #f57c00;
  font-size: 1.2rem;
  font-weigth: 600;
  padding: 0.7rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  left: 60%;

  position: absolute;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
export const ButtonInvest = styled(LinkS)`
  color: #fff;
  background: #f57c00;
  font-size: 1.2rem;
  font-weigth: 600;
  padding: 0.7rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  left: 80%;

  position: absolute;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  border-top: 0.1rem solid #000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 6rem;
  }
`;
export const statText = styled.h3`
  color: #f57c00;
`;
export const RowStat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 6rem;
  }
`;
export const Col = styled.div`
    flex 1 1 50%;
`;

export const Text = styled.h1`
  color: #f57c00;
  font-size: 1.2rem;
  font-weigth: 500;
`;
export const DetailsHeading = styled.h1`
  font-size: 2rem;
  padding: 2rem 5%;
`;
export const DetailWrap = styled.div`
  padding: 1rem 5%;
  width: 85%;
`;
