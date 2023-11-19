// import React from 'react';
// import Icon from './Header';

function HeaderItem(icon, name) {
    return (
        <div className='text-white flex items-center gap-3 text-[18px] font-semi-bold cursor-pointer'>
            <div>{icon}</div>
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderItem