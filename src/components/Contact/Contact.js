import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='section-contact'>
        <h1 className='heading section-contact__heading'>Contact</h1>
        {/* <div>
            <form name="contact-form" class="contact-form" method="post"  action='#'>
                <div className='form__nameContainer'>
                    <div className="nameContainer__label">
                        <label for="name">Name : </label>
                    </div>
                    <div className='nameContainer__item'>
                        <input type="text" placeholder="Your Name" name='name' />
                    </div>
                </div>
                <div className='form__emailContainer'>
                    <div className="emailContainer__label">
                        <label for="email">Email : </label>
                    </div>
                    <div className='emailContainer__item'>
                        <input type="email" placeholder="Your Email" name='email' />
                    </div>
                </div>
                <div className='form__semesterContainer'>
                    <div className="semesterContainer__label">
                        <label for="semester">Semester : </label>
                    </div>
                    <div className='semesterContainer__item'>
                        <select name='semester'>
                            <option name='1'>1st</option>
                            <option name='3'>3rd</option>
                            <option name='4'>4th</option>
                            <option name='6'>6th</option>
                            <option name='8'>8th</option>
                        </select>
                    </div>
                </div>
                <div className='form__batchContainer'>
                    <div className="batchContainer__label">
                        <label for="batch">Batch : </label>
                    </div>
                    <div className='batchContainer__item'>
                        <select name='batch'>
                                <option name='2022'>1st</option>
                                <option name='2020'>3rd</option>
                                <option name='2019'>4th</option>
                                <option name='2018'>6th</option>
                                <option name='2017'>8th</option>
                        </select>
                    </div>
                </div>
                <div className='form__shiftContainer'>
                    <div className="shiftContainer__label">
                        <label>Shift : </label>
                    </div>
                    <div className='shiftContainer__item'>
                        <input type="checkbox" value="morning" name="Morning" /><label>Morning</label> 
                        <input type="checkbox" value="day" /><label>Day</label>
                    </div>
                </div> 
                <div className='form__messageContainer'>
                    <div className="messageContainer__label">
                        <label for='message'>Your Message : </label>
                    </div>
                    <div className='messageContainer__item'>
                        <textarea name='message'></textarea>
                    </div>
                </div>
            </form>
        </div> */}
      </section>
  )
}

export default Contact;