import React from "react";
import { motion } from "framer-motion";
import './Footer.css'

const Footer = () => {
  const date = new Date();
  return (
    <>
      <style>
        {`
          #footer {
            background: black;
            padding: 0 0 30px 0;
            color: #fff;
            font-size: 14px;
          }
          #footer .footer-top {
            background: #0c0b09;
            border-top: 1px solid #37332a;
            border-bottom: 1px solid #28251f;
            padding: 60px 0 30px 0;
          }
          #footer .footer-top .footer-info {
            margin-bottom: 30px;
          }
          #footer .footer-top .footer-info h3 {
            font-size: 24px;
            margin: 0 0 20px 0;
            padding: 2px 0 2px 0;
            line-height: 1;
            font-weight: 300;
            text-transform: uppercase;
            font-family: "Poppins", sans-serif;
          }
          #footer .footer-top .footer-info p {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 0;
            font-family: "Playfair Display", serif;
            color: #fff;
          }
          #footer .footer-top .social-links a {
            font-size: 18px;
            display: inline-block;
            background: #28251f;
            color: #fff;
            line-height: 1;
            padding: 8px 0;
            margin-right: 4px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;
          }
          #footer .footer-top .social-links a:hover {
            background: #cda45e;
            color: #fff;
            text-decoration: none;
          }
          #footer .footer-top h4 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            position: relative;
            padding-bottom: 12px;
          }
          #footer .footer-top .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          #footer .footer-top .footer-links ul li {
            padding: 10px 0;
            display: flex;
            align-items: center;
          }
          #footer .footer-top .footer-links ul a {
            color: #fff;
            transition: 0.3s;
            display: inline-block;
            line-height: 1;
          }
          #footer .footer-top .footer-links ul a:hover {
            color: #cda45e;
          }
          #footer .footer-top .footer-newsletter form {
            margin-top: 30px;
            background: #28251f;
            padding: 6px 10px;
            position: relative;
            border-radius: 50px;
            border: 1px solid #454035;
          }
          #footer .footer-top .footer-newsletter form input[type="email"] {
            border: 0;
            padding: 4px;
            width: calc(100% - 110px);
            background: #28251f;
            color: white;
          }
          #footer .footer-top .footer-newsletter form input[type="submit"] {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            border: 0;
            background: none;
            font-size: 16px;
            padding: 0 20px 2px 20px;
            background: #cda45e;
            color: #fff;
            transition: 0.3s;
            border-radius: 50px;
          }
          #footer .footer-top .footer-newsletter form input[type="submit"]:hover {
            background: #d3af71;
          }
          #footer .copyright {
            text-align: center;
            padding-top: 30px;
          }
          #footer .credits {
            padding-top: 10px;
            text-align: center;
            font-size: 13px;
            color: #fff;
          }
          .sub-input{
            border:none;
            outline:none;
          }
        `}
      </style>

      <footer id="footer">
        <div className="footer-top">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                className="footer-info"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Mighty Plethora Events</h3>
                <p className="footer-address">
                Door no:1, Flat no:1/2, 1st St, Vijaya Nagar,  <br />
                Sridevikuppam, Valasaravakkam, Chennai, Tamil Nadu 600087<br />
                  <strong>Phone:</strong> +91 78453 75177<br />
                  <strong>Email:</strong> sample@gmail.com<br />
                </p>
                <div className="social-links mt-3 flex space-x-2">
                  <a href="#" target="_blank" className="whatsapp p-2 flex justify-center">
                    <i className="bx bxl-whatsapp text-custom-gold"></i>
                  </a>
                  <a href="#" target="_blank" className="facebook">
                    <i className="bx bxl-facebook text-custom-gold"></i>
                  </a>
                  <a href="#" target="_blank" className="instagram">
                    <i className="bx bxl-instagram text-custom-gold"></i>
                  </a>
                  <a href="#" target="_blank" className="youtube">
                    <i className="bx bxl-youtube text-custom-gold"></i>
                  </a>
                </div>
              </motion.div>

              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/careers">Careers</a>
                  </li>
                  
                </ul>
              </div>

              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">PhotoGraphy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">VideoGraphy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Event Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Catering</a>
                  </li>
                </ul>
              </div>

              <motion.div
                className="footer-newsletter"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4>Our Newsletter</h4>
                <p>
                Capture life's best moments with us! Sign up for our newsletter for exclusive offers, studio updates, and photography tips to make your memories unforgettable.
                </p>
                <form>
                  <input type="email" name="email" placeholder="Email Address" className="sub-input" />
                  <input type="submit" value="Subscribe" />
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="copyright text-center mt-8">
            &copy; {date.getFullYear()} <strong><span>Mighty Plethora Events</span></strong>. All Rights
            Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
