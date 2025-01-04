import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(''); 

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .send('service_8z5dd3m', 'template_9ayyzxn', formData, '7iwjEptVs0k1BFMG8')
      .then(
        (response) => {
          setStatus('success');
          console.log('Message sent successfully:', response);
        },
        (error) => {
          setStatus('error');
          console.error('Failed to send message:', error);
        }
      );
  };

  return (
    <section id="contact" className="contact bg-black">
       <div className="text-container heading-container  relative ">
        <span className="sub-title">GET IN TOUCH</span>
        <h1 className="text-5xl text-white font-bold mt-2">Contact Us</h1>
      </div>
      <div className="container mx-auto px-4 py-12" data-aos="fade-up">      
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          style={{ border: '0', width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.800818186653!2d80.17246053666462!3d13.048346880508502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261548a03dd0d%3A0xf35d6476125fe1cb!2sPlethora%20Wedding!5e0!3m2!1sen!2sin!4v1735974303848!5m2!1sen!2sin"          frameBorder="0"
          allowFullScreen
        ></iframe>
      </motion.div>
      </div>
      <div className="container mx-auto pb-11 px-4" data-aos="fade-up">
        <div className="inner-container row mt-10 flex flex-wrap">
          {/* Contact Info Section */}
          <motion.div
            className="col-lg-4 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="info">
              <div className="address flex items-center">
                <i className="bx bx-map text-2xl mr-3"></i>
                <div className='contact-details'>
                  <h4 className="font-semibold text-custom-gold">Location:</h4>
                  <p>Door no:1, Flat no:1/2, 1st St, Vijaya Nagar, <br/> Sridevikuppam, Valasaravakkam, Chennai, Tamil Nadu 600087</p>
                </div>
              </div>
    
              <div className="open-hours flex items-center">
                <i className="bx bx-time text-2xl mr-3"></i>
                <div>
                  <h4 className="font-semibold  text-custom-gold">Open Hours:</h4>
                  <p>
                    Monday-Sunday:
                    <br />
                    12:00 PM - 2:00 AM
                  </p>
                </div>
              </div>

              <div className="email flex items-center">
                <i className="bx bx-envelope text-2xl mr-3"></i>
                <div>
                  <h4 className="font-semibold  text-custom-gold">Email:</h4>
                  <p>sample@gmail.com</p>
                </div>
              </div>

              <div className="phone flex items-center">
                <i className="bx bx-phone text-2xl mr-3"></i>
                <div>
                  <h4 className="font-semibold  text-custom-gold">Call:</h4>
                  <p>+91 78453 75177</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="col-lg-8 flex-1 mt-5 mt-lg-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <form
              onSubmit={handleSubmit}
              role="form"
              className="php-email-form"
            >
              <div className="row mb-5 flex flex-wrap">
                <div className="col-md-6 form-group mt-3 mt-md-0 mr-5 flex-1">
                  <input
                    type="text"
                    name="name"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0 flex-1">
                  <input
                    type="email"
                    name="email"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  name="message"
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                  rows="8"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="my-3">
                {status === 'loading' && <div className="loading">Loading...</div>}
                {status === 'error' && <div className="error-message">Something went wrong, please try again.</div>}
                {status === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
