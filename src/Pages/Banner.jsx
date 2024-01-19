import React from 'react';
import bannerbg from "../assets/banner-bg.jpg";

function Banner() {
    return (
        <section className="banner-sec" id="banner" style={{ background: `url(${bannerbg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p>Why use GDPC</p>
                        <h1>End driver shortage in 90 days</h1>
                        <div className="banner-btn d-flex">
                            <a href="./images/WPF_GDP_010124.pdf" className="banner-btn1">Whitepaper</a>
                            <a href="#" className="banner-btn2">DEX</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        {/* Add content for the right column if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
