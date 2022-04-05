import React from 'react';
import { typeList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';

const FilterPanel = ({
  selectedType,
  selectType,
  selectedRating,
  selectedPrice,
  selectRating,
  categorys,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Type</p>
      <FilterListToggle
        options={typeList}
        value={selectedType}
        selectToggle={selectType}
      />
    </div>
    <div className='Input-group'>
      <p className='label'>Category</p>
      {categorys.map((category) => (
        <CheckboxProton
          key={category.id}
          category={category}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='Input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='Input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
