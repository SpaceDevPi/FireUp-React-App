import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import BlogList from '../../components/OfferticketList/BlogList';
import SearchBar from '../../components/Offerlist/SearchBar';
// import { blogList } from '../../config/data';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { queryApi } from "../../utils/queryApi";
import './styles.css';

const Offertickets = () => {
    const { id } = useParams();
    const [test,setTest] = useState(false)
    const [offertickets,setoffertickets]= useState([])
    async function fetchData() {
      console.log("aaaaaaa")
      const [res, err] = await queryApi("offerticket/findallbyid/" + id);
      console.log(res)
  
      setoffertickets(res);
    }

    useEffect( () => {
        fetchData()
           }, [id]);


  return (
    <div className='orders'>
         <Link className='blog-goBack' to='/offerlist'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
    <h1 className='orders-heading'>Your Tickets</h1>

      {/* Page Header */}

      {/* Search Bar */}
      {/* <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      /> */}

      {/* Blog List & Empty View */}
      {!offertickets.length ? <EmptyView /> : <BlogList blogs={offertickets} />}
    </div>
  );
};

export default Offertickets;
