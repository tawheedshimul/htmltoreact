import React from 'react'
import usdc from "../assets/usdc.png.png"
import bsud from "../assets/busd.png.png"
import usdt from "../assets/usdt.png.png"
import gdpLogo from "../assets/gdpLogo.png"
import bnb from "../assets/bnb.png.png"

function GdpCoin() {
    return (
        <section class="gdp-coin-sec" id="gdp-coin-sec">

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="presaleContainer">
                            <div class="presaleTop">
                                <img alt="Presale Icon" class="presaleIcon" src={gdpLogo} />
                                <div class="presaleHead">
                                    <h3 class="presaleTokenName">GDP Coin</h3>
                                    <p class="presalePair">Gdp / <span id="exchange-currency">BNB</span>
                                    </p>
                                    <a class="tokenExplorer" href="#" target="_blank">View on Explorer <i class="fa fa-external-link"></i>
                                    </a>
                                </div>
                                <div class="presaleAuth">
                                    <a class="audited" href="#" target="_blank">
                                        <i class="fa fa-check-circle"></i> Audited </a>
                                    <a class="verified" href="#" target="_blank">
                                        <i class="fa fa-check-circle"></i> Verified </a>
                                </div>
                            </div>
                            <div class="presaleTimer">
                                <p class="timerItem" id="day">39</p>
                                <small class="timerDot">:</small>
                                <p class="timerItem" id="hr">11</p>
                                <small class="timerDot">:</small>
                                <p class="timerItem" id="min">27</p>
                                <small class="timerDot">:</small>
                                <p class="timerItem" id="sec">21</p>
                            </div>
                            <p class="notice" id="notice"></p>
                            <div class="presaleAction">
                                <div class="presaleRoller" id="loader">
                                    <div class="loader"></div>
                                </div>
                                <div class="balanceStrip">Your Wallet Balance is <span id="balance">0.00</span>
                                    <small id="balance-currency">BNB</small>
                                </div>
                                <div class="currencyDrop">
                                    <div class="currencyDropItem" id="bnb">
                                        <img alt="currency" src={bnb} />
                                        <h3>BNB</h3>
                                    </div>
                                    <div class="currencyDropItem" id="usdt">
                                        <img alt="currency" src={usdt} />
                                        <h3>USDT</h3>
                                    </div>
                                    <div class="currencyDropItem" id="busd">
                                        <img alt="currency" src={bsud} />
                                        <h3>BUSD</h3>
                                    </div>
                                    <div class="currencyDropItem" id="usdc">
                                        <img alt="currency" src={usdc} />
                                        <h3>USDC</h3>
                                    </div>
                                </div>
                                <input class="presaleInput" id="quantity" placeholder="Exchange Quantity" type="number" />
                                <small class="error" id="error">Error</small>
                                <small class="info" id="info">Info</small>
                                <div class="balanceScale">
                                    <p class="balanceScaleItem" id="scale-10">10%</p>
                                    <p class="balanceScaleItem" id="scale-25">25%</p>
                                    <p class="balanceScaleItem" id="scale-50">50%</p>
                                    <p class="balanceScaleItem" id="scale-75">75%</p>
                                    <p class="balanceScaleItem" id="scale-100">100%</p>
                                </div>
                                <div class="presaleActionBtnWrapper">
                                    <div class="presaleActionBtn" id="buy-btn">BUY</div>
                                    <div class="presaleActionBtnDull" id="invalid-btn">Invalid Amount</div>
                                    <div class="presaleActionRoller" id="action-roller">
                                        <div class="roller-wrapper">
                                            <div class="roller"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="presaleConversion">1 <span id="conversion-symbol">BNB</span>
                                <i class="fa fa-long-arrow-right"></i>
                                <span id="conversion-amount">5000</span>
                                <span>KDT</span>
                            </h4>
                            <div class="presaleStats">
                                <div class="statTop">
                                    <p id="presale-status">ACTIVE</p>
                                    <p id="complete-percent">0.00 %</p>
                                </div>
                                <div class="statBottom">
                                    <p id="raised-amount">0.00</p>
                                    <p>Hard Cap: <span id="hard-cap">245</span> BNB </p>
                                </div>
                            </div>
                            <a class="contractExplorer" href="#" target="_blank">View Presale Smart Contract Address
                            </a>
                            <a class="brandLabel" href="#" target="_blank">Powered by <img alt="Kredict Logo"
                                src={gdpLogo} />GDP COIN </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GdpCoin;