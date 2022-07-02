import React from 'react';
import './Groups.css';

import ContainerBox from '../ContainerBox/ContainerBox';

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
        </div>
        <div className='moreGroupButtonContainer'><Link to={props.moreGroupsLink} className="moreGroupButton">View More Groups</Link></div>
      </section>
  )
}

export default Groups;