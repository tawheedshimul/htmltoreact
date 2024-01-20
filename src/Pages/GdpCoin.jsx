import React from 'react'
import usdc from "../assets/usdc.png.png"
import bsud from "../assets/busd.png.png"
import usdt from "../assets/usdt.png.png"
import gdpLogo from "../assets/gdpLogo.png"
import bnb from "../assets/bnb.png.png"
import { CheckCircleFill, Link45deg } from 'react-bootstrap-icons'

function GdpCoin() {
    return (
        <section className="gdp-coin-sec container" id="gdp-coin-sec">

            <div className="row">
                <div className="col-md-6">
                    <div className="presaleContainer">
                        <div className="presaleTop">
                            <img alt="Presale Icon" className="presaleIcon" src={gdpLogo} />
                            <div className="presaleHead">
                                <h3 className="presaleTokenName">GDP Coin</h3>
                                <p className="presalePair">Gdp / <span id="exchange-currency">BNB</span>
                                </p>
                                <a className="tokenExplorer" href="#" target="_blank">View on Explorer <i className="fa fa-external-link"><Link45deg /> </i>
                                </a>
                            </div>
                            <div className="presaleAuth">
                                <a className="audited" href="#" target="_blank">
                                    <i className="fa fa-check-circle"><CheckCircleFill /></i> Audited </a>
                                <a className="verified" href="#" target="_blank">
                                    <i className="fa fa-check-circle"><CheckCircleFill /></i> Verified </a>
                            </div>
                        </div>
                        <div className="presaleTimer">
                            <p className="timerItem" id="day">39</p>
                            <small className="timerDot">:</small>
                            <p className="timerItem" id="hr">11</p>
                            <small className="timerDot">:</small>
                            <p className="timerItem" id="min">27</p>
                            <small className="timerDot">:</small>
                            <p className="timerItem" id="sec">21</p>
                        </div>
                        <p className="notice" id="notice"></p>
                        <div className="presaleAction">
                            <div className="presaleRoller" id="loader">
                                <div className="loader"></div>
                            </div>
                            <div className="balanceStrip">Your Wallet Balance is <span id="balance">0.00</span>
                                <small id="balance-currency">BNB</small>
                            </div>
                            <div className="currencyDrop">
                                <div className="currencyDropItem" id="bnb">
                                    <img alt="currency" src={bnb} />
                                    <h3>BNB</h3>
                                </div>
                                <div className="currencyDropItem" id="usdt">
                                    <img alt="currency" src={usdt} />
                                    <h3>USDT</h3>
                                </div>
                                <div className="currencyDropItem" id="busd">
                                    <img alt="currency" src={bsud} />
                                    <h3>BUSD</h3>
                                </div>
                                <div className="currencyDropItem" id="usdc">
                                    <img alt="currency" src={usdc} />
                                    <h3>USDC</h3>
                                </div>
                            </div>
                            <input className="presaleInput" id="quantity" placeholder="Exchange Quantity" type="number" />
                            <small className="error" id="error">Error</small>
                            <small className="info" id="info">Info</small>
                            <div className="balanceScale">
                                <p className="balanceScaleItem" id="scale-10">10%</p>
                                <p className="balanceScaleItem" id="scale-25">25%</p>
                                <p className="balanceScaleItem" id="scale-50">50%</p>
                                <p className="balanceScaleItem" id="scale-75">75%</p>
                                <p className="balanceScaleItem" id="scale-100">100%</p>
                            </div>
                            <div className="presaleActionBtnWrapper">
                                <div className="presaleActionBtn" id="buy-btn">BUY</div>
                                <div className="presaleActionBtnDull" id="invalid-btn">Invalid Amount</div>
                                <div className="presaleActionRoller" id="action-roller">
                                    <div className="roller-wrapper">
                                        <div className="roller"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="presaleConversion">1 <span id="conversion-symbol">BNB</span>
                            <i className="fa fa-long-arrow-right"></i>
                            <span id="conversion-amount">5000</span>
                            <span>KDT</span>
                        </h4>
                        <div className="presaleStats">
                            <div className="statTop">
                                <p id="presale-status">ACTIVE</p>
                                <p id="complete-percent">0.00 %</p>
                            </div>
                            <div className="statBottom">
                                <p id="raised-amount">0.00</p>
                                <p>Hard Cap: <span id="hard-cap">245</span> BNB </p>
                            </div>
                        </div>
                        <a className="contractExplorer" href="#" target="_blank">View Presale Smart Contract Address
                        </a>
                        <a className="brandLabel" href="#" target="_blank">Powered by <img alt="Kredict Logo"
                            src={gdpLogo} />GDP COIN </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GdpCoin;