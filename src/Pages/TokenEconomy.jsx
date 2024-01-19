import React from 'react'
import bg1 from "../assets/bg1.png"
import background2 from "../assets/background2.png"

function TokenEconomy() {
    return (
        <section class="tookeneconomics" id="tookeneconomics">
            <div class="container">
                <div class="top-heading">
                    <h3>TOKENOMICS</h3>
                    <p>WHY GDPC</p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 mb-5">
                        <div class="tooke-outer-box">
                            <div class="image-box">
                                <img src={bg1}/>
                            </div>
                            <div class="tooken-content">
                                <h4>Ultra Fast</h4>
                                <p>Based on AVAX, All transactions are completed within 15 seconds. This is why GDPC is fast becoming the
                                    best cryptocurrency to invest in.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 mb-5">
                        <div class="tooke-outer-box">
                            <div class="image-box">
                                <img src={background2}/>
                            </div>
                            <div class="tooken-content">
                                <h4>Safe + Reliable</h4>
                                <p>No data storage, AVS, visual cryptograms and execution of measures prevent search attacks and offer
                                    high-level of security and reliability.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tokenomicsDetailsHolder">
                    <div class="tokenomicsColumn aos-init aos-animate" data-aos="fade-up">
                        <h4 class="tokenDetailHead">Token Name</h4>
                        <p class="tokenDetailText">GDP COIN</p>
                        <h4 class="tokenDetailHead">Total Symbol</h4>
                        <p class="tokenDetailText">GDPC</p>
                        <h4 class="tokenDetailHead">Decimals</h4>
                        <p class="tokenDetailText">4</p>
                    </div>
                    <div class="tokenomicsColumn aos-init aos-animate" data-aos="fade-up">
                        <h4 class="tokenDetailHead">Total Supply</h4>
                        <p class="tokenDetailText">10,000,000,000</p>
                        <h4 class="tokenDetailHead">Presale Start Date</h4>
                        <p class="tokenDetailText">July 5, 2023, 8:24 a.m.</p>
                        <h4 class="tokenDetailHead">Currenciess Accepted</h4>
                        <p class="tokenDetailText">BNB, USDC, USDT, BUSD</p>
                    </div>
                    <div class="tokenomicsColumn aos-init aos-animate" data-aos="fade-up">
                        <h4 class="tokenDetailHead">Presale Token Supply</h4>
                        <p class="tokenDetailText">10,000,000</p>
                        <h4 class="tokenDetailHead">Soft Cap</h4>
                        <p class="tokenDetailText">200</p>
                        <h4 class="tokenDetailHead">Hard Cap</h4>
                        <p class="tokenDetailText">245</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenEconomy;