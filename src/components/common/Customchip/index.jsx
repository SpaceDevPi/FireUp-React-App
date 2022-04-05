import React from 'react';
import './styles.css';

const Chip = ({ label }) => <div>
    
    
    {label==="silver" ? <p className='chipsilver' >{label}</p>:  ''}
    {label==="bronze" ? <p className='chipbronze' >{label}</p>:  ''}
    {label==="gold" ? <p className='chipgold' >{label}</p>:  ''}

    
    
    
    
    
    </div>;

export default Chip;
