import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const EventContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    numberOfGuests: '',
    eventServices: [],
    budgetRange: '',
    additionalInfo: '',
    referralSource: '',
    contactMethod: '',
    freeConsultation: '',
    attachedFiles: null,
  });

  const [status, setStatus] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        eventServices: checked
          ? [...prevState.eventServices, value]
          : prevState.eventServices.filter((service) => service !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        attachedFiles: e.target.files,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

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
      <div className="text-container heading-container relative">
        <span className="sub-title">GET IN TOUCH</span>
        <h1 className="text-5xl text-white font-bold mt-2">Event Inquiry</h1>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.800818186653!2d80.17246053666462!3d13.048346880508502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261548a03dd0d%3A0xf35d6476125fe1cb!2sPlethora%20Wedding!5e0!3m2!1sen!2sin!4v1735974303848!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
      <div className="container mx-auto pb-11 px-4" data-aos="fade-up">
        <form
          onSubmit={handleSubmit}
          className="php-email-form"
        >
          <div className="row mb-5 flex flex-wrap">
            <div className="col-md-6 form-group mt-3 mt-md-0 mr-5 flex-1">
              <input
                type="text"
                name="fullName"
                className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0 flex-1">
              <input
                type="email"
                name="email"
                className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="phoneNumber"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <select
              name="eventType"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              value={formData.eventType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Conference">Conference</option>
              <option value="Concert">Concert</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <input
              type="date"
              name="eventDate"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              value={formData.eventDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="eventLocation"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Event Location (Optional)"
              value={formData.eventLocation}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="number"
              name="numberOfGuests"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Number of Guests"
              value={formData.numberOfGuests}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label className="block text-gray-500 font-medium">Event Services Needed</label>
            <div className="grid grid-cols-2 gap-4">
              {['Event Planning & Coordination', 'Venue Selection', 'Catering', 'Entertainment (DJ, Band, etc.)', 'Decorations & Floral Design', 'Audio/Visual Equipment', 'Photography & Videography', 'Event Staffing', 'Other'].map((service) => (
                <div key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    name="eventServices"
                    value={service}
                    checked={formData.eventServices.includes(service)}
                    onChange={handleInputChange}
                    className="mr-2 rounded-xl"

                  />
                  <span className='text-white'>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="budgetRange"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Budget Range (Optional)"
              value={formData.budgetRange}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <textarea
              name="additionalInfo"
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Additional Information (Optional)"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group mt-3">
            <label className="block text-gray-500 font-medium">How Did You Hear About Us?</label>
            <select
              name="referralSource"
              className="form-control w-full px-4 py-2 border bg-black text-white "
              value={formData.referralSource}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="block text-gray-500 font-medium">Preferred Method of Contact</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  checked={formData.contactMethod === 'Email'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Email
              </label>
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Phone"
                  checked={formData.contactMethod === 'Phone'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Phone
              </label>
            </div>
          </div>

          <div className="form-group mt-3">
            <label className="block text-gray-500 font-medium">Would you like a free consultation?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="freeConsultation"
                  value="Yes"
                  checked={formData.freeConsultation === 'Yes'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="freeConsultation"
                  value="No"
                  checked={formData.freeConsultation === 'No'}
                  onChange={handleInputChange}
                  className="mr-2 text-white"
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group mt-3">
            <label className="block text-gray-500 font-medium">Attach Files (Optional)</label>
            <input
              type="file"
              name="attachedFiles"
              className="form-control w-full px-4 py-2 border"
              multiple
              onChange={handleInputChange}
            />
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EventContactForm;
