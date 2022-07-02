import React , {useState , useRef} from 'react';
import './HomePage.css';

import Groups from '../../components/Groups/Groups';
import Contact from '../../components/Contact/Contact';
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

      {/* About(extended) */}
      <About />

      {/* Timeline */}
      <Timeline />

      {/* Gallery */}
      <Gallery />

      {/* Groups(extended) */}
      <Groups moreGroupsLink="/" />

      {/* Contact */}
      <Contact />


      {/* Footer */}
      <footer></footer>
    </div>

  )
}

export default HomePage;