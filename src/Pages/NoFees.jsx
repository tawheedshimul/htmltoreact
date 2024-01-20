import React from 'react'
import image1 from '../assets/image1.png'

function NoFees() {
    return (
        <section className="nofees-sec container" id="nofees-sec">
            <div className="mx-3">
                <div className="top-haeding">
                    <h3>No hidden fees. <br/> Use anywhere reliably. </h3>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="left-iamge-col">
                            <img src={image1}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="right-content-col">
                            <p>With low transaction fees and no chargebacks users do not have to worry about expensive transaction fee
                                and chargeback. GDPC is a borderless payment system. There is no waiting, no international fees and no
                                limitations. No data storage, AVS, visual cryptograms and execution of measures prevent search attacks and
                                offer high-level of security and reliability.</p>
                            <div className="banner-btn d-flex">
                                <a href="#" className="banner-btn1">Whitepaper</a>
                                <a href="#" className="banner-btn2">DEX</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoFees;