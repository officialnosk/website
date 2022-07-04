import React , {useState , useRef} from 'react';
import './HomePage.css';

import Groups from '../../components/Groups/Groups';
import About from '../../components/About/About';
import Gallery from '../../components/Gallery/Gallery';
import Timeline from '../../components/Timeline/Timeline';
import Header from '../../components/Header/Header';

const HomePage = () => {
  const [backImageCount , setBackImageCount] = useState(1);
  // const headerRef = useRef();
  const onNextIconClicked = () => {
    setBackImageCount((image) => {
      if(image<=5){
        return image++;
      }else{
        return image;
      }
    });
    //console.log(backImageCount);
    //headerRef.current.style.background = `linear-gradient(rgba(255, 216, 155, 0.7) , rgba(25, 84, 123, 0.6)) , url(../../assests/images/background${backImageCount}.jpg)`;
  };

  const onBeforeIconClicked = () => {
    setBackImageCount((image) => {
      if(image>=1){
        return image--;
      }else{
        return image;
      }
    });
    //console.log(backImageCount);
    // headerRef.current.style.background = `linear-gradient(rgba(255, 216, 155, 0.7) , rgba(25, 84, 123, 0.6)) , url(../../assests/images/background${backImageCount}.jpg)`;
  };

  return (
    <div className='homepage'>
      {/* header Page with nosk image background */}
      <Header onBeforeIconClicked={onBeforeIconClicked} onNextIconClicked={onNextIconClicked} />

      <div className='homepageGap'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,74.7C560,107,640,181,720,181.3C800,181,880,107,960,106.7C1040,107,1120,181,1200,202.7C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <svg className="homegapWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,74.7C560,107,640,181,720,181.3C800,181,880,107,960,106.7C1040,107,1120,181,1200,202.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>

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