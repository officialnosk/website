import React from 'react';
import './Groups.css';

import ContainerBox from '../ContainerBox/ContainerBox';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from 'react-router-dom';

const Groups = (props) => {
  return (
    <section className='section-groups'>
        <h1 className='heading section-groups__heading'>Groups</h1>
        <div className="groups-collection">
          <ContainerBox title='Python Group' description="This group mainly provides python related support to the open source community , organizes python related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='JavaScript Group' description="This group mainly provides JS related support to the open source community , organizes JS related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='ML Group' description="This group mainly provides ML related support to the open source community , organizes ML related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
          <ContainerBox title='Java/Spring Group' description="This group mainly provides Java/Spring related support to the open source community , organizes Java related workshops and mentors the junior members of the Klub." viewMoreLink="/" />
        </div>
        {/* <div className='moreGroupButtonContainer'><Link to={props.moreGroupsLink} className="moreGroupButton">View More Groups</Link></div> */}
        <svg className="groupsWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8d424" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,74.7C560,107,640,181,720,181.3C800,181,880,107,960,106.7C1040,107,1120,181,1200,202.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <ArrowBackIosNewIcon className='groupBeforeIcon' size="400"  />
        <ArrowForwardIosIcon className='groupAfterIcon' size="400" />
      </section>
  )
}

export default Groups;