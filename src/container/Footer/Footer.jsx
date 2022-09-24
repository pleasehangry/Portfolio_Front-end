import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    const { name, email, message } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name,
            email,
            message,
        };

        client.createContact(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        });
    };

    return (
        <>
            <h2 className="head-text">Take a coffe & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="Email" />
                    <a href="mailto:nguyenquanghoang12345@gmail.com" className="p-text">
                        nguyenquanghoang12345@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="Email" />
                    <a href="tel: +1 (234) 456-789" className="p-text">
                        +1 (234) 456-789
                    </a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your name"
                            name="name"
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        ></textarea>
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>
                        Send Message
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">Thank you for getting in touch</h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
