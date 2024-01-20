import React from 'react'
import contactimg from "../assets/contact-img.png"

function ContactPage() {
    return (
        <section className="contact-us" id="contact">
            <div className="container">
                <div className="top-heading">
                    <h3>Contact</h3>
                </div>
                <div className="contact-info row align-items-center justify-content-center ">
                    <div className="col-md-12">
                        <div className="innercontact">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className=" contact-information" >
                                        <h4 className="form-heading">
                                            Contact Information
                                        </h4>
                                        <div className="information">
                                            <p className="personal-information">
                                                <i className="fa fa-envelope"></i><a href="#" className="text-white">abc@gmail.com</a>
                                            </p>
                                            <p className="personal-information">
                                                <i className="fa fa-envelope"></i><a href="#" className="text-white">abc@gmail.com</a>
                                            </p>
                                            <p className="personal-information">
                                                <i className="fa fa-envelope"></i><a href="#" className="text-white">abc@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="contact-form text-white">
                                        <h3 className="form-heading">
                                            Contact With Us
                                        </h3>
                                        <p className="lead mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero?</p>
                                        <form>
                                            <div className="mb-3">
                                                <input type="text " className="form-control " id="firstname " placeholder="First Name"/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text " className="form-control " id="lastname " placeholder="Last Name"/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="email " className="form-control " id="email" placeholder="Email Address"/>
                                            </div>
                                            <div className="mb-3">
                                                <textarea className="form-control" name="" id="" rows="10" placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn--yellow ">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;