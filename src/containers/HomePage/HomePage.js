import React , {useState , useRef} from 'react';
import './HomePage.css';

import Groups from '../../components/Groups/Groups';
import About from '../../components/About/About';
import Gallery from '../../components/Gallery/Gallery';
import Timeline from '../../components/Timeline/Timeline';
import Header from '../../components/Header/Header';

const HomePage = () => {
  const [backImageCount , setBackImageCount] = useState(1);
  // console.log(backImageCount);
  const headerRef = useRef(null);
  const onNextIconClicked = () => {
    if(backImageCount < 5){
      let image = backImageCount + 1;
      setBackImageCount(image);
    }else{
      setBackImageCount(backImageCount);
    }
    // console.log(backImageCount);
    // let imageUrl = `../../assests/images/header-background/background2.jpg`;
    // headerRef.current.style.background = "url(" + imageUrl + ")";
  };

  const onBeforeIconClicked = () => {
    if(backImageCount > 1){
      let image = backImageCount - 1;
      setBackImageCount(image);
    }else{
      setBackImageCount(backImageCount);
    }
    // console.log(backImageCount);
    // let imageUrl = `../../assests/images/header-background/background1.jpg`;
    // headerRef.current.style.background = "url(" + imageUrl + ")";
  }
  return (
    <div className='homepage'>
      {/* header Page with nosk image background */}
      <Header onBeforeIconClicked={onBeforeIconClicked} onNextIconClicked={onNextIconClicked} headerRef={headerRef}/>

      {/* About(extended) */}
      <About />

      {/* Timeline */}
      <Timeline />

      {/* Gallery */}
      <Gallery />

      {/* Groups(extended) */}
      <Groups moreGroupsLink="/" />

      {/* Footer */}
      <footer></footer>
    </div>

  )
}

export default HomePage;