import React from 'react'
import image1 from '../assets/image1.png'

function NoFees() {
    return (
        <section class="nofees-sec" id="nofees-sec">
            <div class="mx-3">
                <div class="top-haeding">
                    <h3>No hidden fees. <br/> Use anywhere reliably. </h3>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="left-iamge-col">
                            <img src={image1}/>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="right-content-col">
                            <p>With low transaction fees and no chargebacks users do not have to worry about expensive transaction fee
                                and chargeback. GDPC is a borderless payment system. There is no waiting, no international fees and no
                                limitations. No data storage, AVS, visual cryptograms and execution of measures prevent search attacks and
                                offer high-level of security and reliability.</p>
                            <div class="banner-btn d-flex">
                                <a href="#" class="banner-btn1">Whitepaper</a>
                                <a href="#" class="banner-btn2">DEX</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoFees;