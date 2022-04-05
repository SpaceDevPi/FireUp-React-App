import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const ButtonCartCount = ({props}) => {
  console.log(props)
  console.log("test")
  return (
    <div className='btnCartCount' onClick={() =>         window.location.href = '/Offertickets/'+props      
  }>
      {/* <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div> */}
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartCount: selectCartItemsCount,
// });

export default ButtonCartCount;
