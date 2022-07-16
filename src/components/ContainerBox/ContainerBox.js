import React from 'react';
import styles from './ContainerBox.module.css';

import {Link} from 'react-router-dom';

const ContainerBox = (props) => {
  return (
    <div className={styles.containerBox}>
        <h2 className={styles.containerTitle}>{props.title}</h2>
        <div className={styles.containerBox__description}>
            <p>{props.description}</p>
        </div>
        <div className={styles.containerBox__viewButton}>
            <Link to={props.viewMoreLink} className={styles.viewButton}>View More</Link>
        </div>
    </div>
  )
}

export default ContainerBox;