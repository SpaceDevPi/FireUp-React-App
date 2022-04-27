import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Offerlist/FilterPanel';
import List from '../../components/Offerlist/List';
import SearchBar from '../../components/Offerlist/SearchBar';
import { dataList } from '../../constants';
import './styles.css';
import { selectOffers } from "../../redux/slices/offersSlice";
import './styles.css';

import {  useSelector } from "react-redux";
import ButtonCartCount from '../../components/common/ButtonCartCount';

const Offerlist = () => {
  const { investor } = useSelector((state) => state.auth);

  const [offerlist] = useSelector(selectOffers);
  console.log(offerlist)
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 5000]);
  
  const [categorys, setCategorys] = useState([
    { id: 1, checked: false, label: 'Gold' },
    { id: 2, checked: false, label: 'Silver' },
    { id: 3, checked: false, label: 'Bronze' },
  ]);


  const [list, setList] = useState(offerlist);
  console.log(list)

  
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectType = (event, value) =>
    !value ? null : setSelectedType(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = categorys;
    const changeCheckedcategorys = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategorys(changeCheckedcategorys);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = offerlist;
    console.log(updatedList)
    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedType) {
      updatedList = updatedList.filter(
        (item) => item.type === selectedType
      );
    }

    // Cuisine Filter
    const categoryChecked = categorys
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
      categoryChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedType, categorys, searchInput, selectedPrice]);


  return (
    <div className='home'>
      
            <ButtonCartCount  props={investor._id}/>

      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />


      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedType={selectedType}
            selectType={handleSelectType}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            categorys={categorys}
            changeChecked={handleChangeChecked}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Offerlist;
