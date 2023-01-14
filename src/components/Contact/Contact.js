import React from 'react';
import "./contact.scss";

const Contact = () => {
    return (
        <section className='section-contact'>
            <h1 className='heading section-contact__heading'>Contact</h1>
            <div className="form">
                <form action="">
                    <div className="top">
                        <input type="text" placeholder='Your name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="choose">
                        <div className="select">
                            <div className="semester">
                                <h3>Semester: </h3>
                                <select>
                                    <option value="0">Choose Semester</option>
                                    <option value="1" className='first'>First</option>
                                    <option value="2">Second</option>
                                    <option value="3">Third</option>
                                    <option value="4">Fourth</option>
                                    <option value="5">Fifth</option>
                                    <option value="6">Sixth</option>
                                    <option value="7">Seventh</option>
                                    <option value="8">Eighth</option>
                                </select>
                            </div>
                            <div className="batch">
                                <h3>Batch: </h3>
                                <select>
                                    <option value="0">Choose Batch</option>
                                    <option value="1">First</option>
                                    <option value="2">Second</option>
                                    <option value="3">Third</option>
                                    <option value="4">Fourth</option>
                                    <option value="5">Fifth</option>
                                    <option value="6">Sixth</option>
                                    <option value="7">Seventh</option>
                                    <option value="8">Eighth</option>
                                </select>
                            </div>
                        </div>
                        <div className="shift">
                            <h2>Shift: </h2>
                            <div className="morning">
                                <h4>Morning: </h4>
                                <input type="checkbox" name="morning" id="" />
                            </div>
                            <div className="day">
                                <h4>Day:</h4>
                                <input type="checkbox" name="day" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="messageArea">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                    </div>
                    <div className="button">
                        <button>Submit</button>
                    </div>
                </form>
            </div>

        </section>
    )
}
export default Contact;