import React, { useState, useEffect } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { queryApi } from "../../../utils/queryApi";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";

import { useApi } from "../../../hooks/useApi";
import { EventContext } from "../context";

import StyledHero from "../components/StyledHero";
import { Title } from "@material-ui/icons";

// const { slug } = useParams();

export default function SingleEvent(props) {
  const { id } = useParams();

  const [toRender, setToRender] = useState(null);

  async function fetchData() {
    console.log("aaaaaaa");

    const [res, err] = await queryApi("events/EventId/" + id);
    console.log(res);
    setToRender(res);

    console.log(id);
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  // console.log(toRender.Title);

  // constructor(props) {

  //   super(props);
  //   // console.log(this.props);
  //   this.state = {
  //     slug: "single-basic",
  //     defaultBcg: defaultBcg,
  //   };
  // }
  // static contextType = EventContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  // console.log(toRender.Title);
  return (
    // const { getEvent } = this.context;
    // const event = getEvent(this.state.slug);

    // if (!event) {

    //

    // }
    // const {
    //   name,
    //   description,
    //   capacity,

    //   price,
    //   extras,

    //   images,
    // } = event;
    // const [...defaultImages] = images;
    // console.log(defaultImages);

    // return (

    <>
      {toRender ? (
        <>
          <StyledHero>
            <Banner
              id="bannerImage"
              title={toRender.Title}
              // background-image={`http://localhost:5000/uploads/${toRender.img}`}
            >
              <div
                style={{
                  backgroundImage: `url("http://localhost:5000/uploads/${toRender.img}")`,
                }}
              >
                {/* <Image src={`http://localhost:5000/uploads/${toRender.img}`} /> */}

                <Link to="/events" className="Btn-primary">
                  back to events
                </Link>
              </div>
            </Banner>
          </StyledHero>
          <section className="single-event">
            <div className="single-event-info">
              <article className="desc">
                <h3>details </h3>
                <p>{toRender.Description}</p>
              </article>
              <article className="info">
                <h3>Organisateur </h3>
                <p>{toRender.Organisator}</p>
              </article>
              <article className="desc">
                <h3>Categorie</h3>
                <h4>{toRender.Categories}</h4>
              </article>
              <article className="info">
                <h3>Période</h3>
                <h4>{toRender.Date_Debut}</h4>
                <h4>{toRender.Date_Fin}</h4>
              </article>
              <article className="desc">
                <h3>Localisation</h3>
                <h4>{toRender.Localisation}</h4>
              </article>
            </div>
          </section>
          <section className="event-extras">
            {/* <h6>extras </h6>
    <ul className="extras">
      {extras.map((item, index) => (
        <li key={index}>- {item}</li>
      ))}
    </ul> */}

            <div className="p-4 clearfix">
              <div className="row">
                <div className="col-md-3 col-12 ml-auto">
                  <Link
                    to={`/booknow/${id}/0`}
                    className="Btn-primary float-right "
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>DEtails Event not found </p>
      )}
    </>
    // );
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
  width: 50%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
