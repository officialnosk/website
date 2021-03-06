import React from 'react';
import { colors } from '../../assests/colors/colors';
import styles from  './Alumni.module.css';

const Alumni = () => {
  return (
    <div className={styles.alumniContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.alumniWaveUpper} viewBox="0 0 1440 320"><path fill={colors.green} fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,74.7C560,107,640,181,720,181.3C800,181,880,107,960,106.7C1040,107,1120,181,1200,202.7C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div className={styles.alumniBoxesContainer}></div>
        <svg className={styles.alumniWaveLower} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colors.yellow} fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,74.7C560,107,640,181,720,181.3C800,181,880,107,960,106.7C1040,107,1120,181,1200,202.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
  )
}

export default Alumni;