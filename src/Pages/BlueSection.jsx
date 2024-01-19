import React from 'react'

function BlueSection() {
    return (
        <section className="blue-sec2" id="blue-sec2">
            <div className="mx-3">
                <div className="row">
                    <div className="col-lg-5 col-md-12">

                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 mb-3">
                                <div className="outer-col">
                                    <p>GDPC <br/>PREVIOUS PRICE</p>
                                    <h6>$6.581012</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 mb-3">
                                <div className="outer-col">
                                    <p>GDPC <br/>current PRICE</p>
                                    <h6 className="green">$7.581012</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 mb-3">
                                <div className="outer-col">
                                    <p>GDPC <br/>Next PRICE</p>
                                    <h6>$6.581012</h6>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="outer-col outer-btn-col">
                                    <a href="#">BUY GDPC NOW <br/><span>JOIN US</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlueSection;