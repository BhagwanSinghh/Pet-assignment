import React from "react";
import { useState } from "react";
import { location4 ,phoneicon4} from "../../assets/index.js";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name) {
            errors.name = "Please enter your name";
            isValid = false;
        }

        if (!formData.email) {
            errors.email = "Please enter your email";
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
        }
    };
    return (
        <div class="contact-pages pt-120 mb-120">
            <div class="container">
                <div class="row align-items-center g-lg-4 gy-5">
                    <div class="col-lg-5">
                        <div class="contact-left">
                            <div class="hotline mb-80">
                                <h3>Call Us Now</h3>
                                <div class="icon">
                                    <img src={phoneicon4} alt="phone-icon4" />
                                </div>
                                <div class="info">
                                    <h6><a href="tel:+012-3456-789102">+012-3456-789102</a></h6>
                                    <h6><a href="tel:+012-3456-789102">+012-3456-789102</a></h6>
                                </div>
                            </div>
                            <div class="location">
                                <h3>Call Us Now</h3>
                                <div class="icon">
                                    <img src={location4} alt="location4" />
                                </div>
                                <div class="info">
                                    <h6><a href="#">168/170, Ave 01, Mirpur,<br></br>
                                        Dhaka, Bangladesh</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <h2>Have Any Questions</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 mb-40">
                                        <div className="form-inner">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <div className="error-message">
                                                {formErrors.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-40">
                                        <div className="form-inner">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <div className="error-message">
                                                {formErrors.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-40">
                                        <div className="form-inner">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-40">
                                        <div className="form-inner">
                                            <textarea
                                                name="message"
                                                placeholder="Your message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-inner">
                                            <button className="primary-btn1">
                                                Send Message <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

