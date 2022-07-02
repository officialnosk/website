import React from 'react';
import './ContainerBox.css';

import {Link} from 'react-router-dom';

const ContainerBox = (props) => {
  return (
    <div className='containerBox'>
        <h2 className='containerTitle'>{props.title}</h2>
        <div className='containerBox__description'>
            <p>{props.description}</p>
        </div>
        <div className='containerBox__viewButton'>
            <Link to={props.viewMoreLink} className="viewButton">View More</Link>
        </div>
    </div>
  )
}

export default ContainerBox;