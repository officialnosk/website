import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className='section-gallery'>
        <h1 className='heading section-groups__heading'>Gallery</h1>
        <ul class="nosk-gallery">
                <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-1.jpg')} alt="nosk" /></figure></li>
                <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-2.jpg')} alt="nos" /></figure></li>
                <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-3.jpg')} alt="nos" /></figure></li>
                <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-4.jpg')} alt="nos" /></figure></li>
            </ul>
            
        <ul class="nosk-gallery">
            <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-5.jpg')} alt="nos" /></figure></li>
            <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-6.jpg')} alt="nos" /></figure></li>
            <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-7.jpg')} alt="nos" /></figure></li>
            <li><figure class="image-container"><img src={require('../../assests/images/gallery/gallery-8.jpg')} alt="nos" /></figure></li>
        </ul>
      </section>
  )
}

export default Gallery;