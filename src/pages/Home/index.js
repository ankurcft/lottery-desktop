import './index.css'
import coverPic from '../../assets/images/gameCover.jpg'
import timeAndResultIcon from '../../assets/images/timeAndResult.png'
import doubtIcon from '../../assets/images/doubt.png'
import cancelTicketIcon from '../../assets/images/cancel-ticket.png'
import listIcon from '../../assets/images/list.png'
import passwordIcon from '../../assets/images/password.png'
import printIcon from '../../assets/images/print.png'
import accountIcon from '../../assets/images/account.png'
import printerIcon from '../../assets/images/printer.png'
import removeIcon from '../../assets/images/removeIcon.png'
import r10 from '../../assets/images/cur10.png'
import r20 from '../../assets/images/cur20.png'
import r50 from '../../assets/images/cur50.png'
import r100 from '../../assets/images/cur100.png'
import r500 from '../../assets/images/cur500.png'
import r1k from '../../assets/images/cur1k.png'
import betNum1 from '../../assets/images/bet-num1.png'
import betNum2 from '../../assets/images/bet-num2.png'
import betNum3 from '../../assets/images/bet-num3.png'
import betNum4 from '../../assets/images/bet-num4.png'
import betNum5 from '../../assets/images/bet-num5.png'
import betNum6 from '../../assets/images/bet-num6.png'
import betNum7 from '../../assets/images/bet-num7.png'
import betNum8 from '../../assets/images/bet-num8.png'
import betNum9 from '../../assets/images/bet-num9.png'
import betNum10 from '../../assets/images/bet-num10.png'
import betNum11 from '../../assets/images/bet-num11.png'
import betNum12 from '../../assets/images/bet-num12.png'
import lotteryIcon from '../../assets/images/lottery.png'
import frame1 from '../../assets/images/frame1.png'



import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="home-container">
                <img alt="Background Cover Pic" src={coverPic} className="home-image" />
                <iframe id="res" src="win-table.html" className="home-iframe"></iframe>
                <img alt="Time And Result" src={timeAndResultIcon} className="home-image01" />
                <button id="help" type="button" className="home-button button">
                    <img alt="Have Quation ?" src={doubtIcon} className="home-image02" />
                </button>
                <Link to="/cancel-ticket">
                    <button name="cancel-ticket" type="button" className="home-button01 button">
                        <img alt="Cancel Ticket" src={cancelTicketIcon} className="home-image03" />
                    </button>
                </Link>
                <button name="view-res" type="button" className="home-button02 button">
                    <img alt="image" src={listIcon} className="home-image04" />
                </button>
                <Link to="/change-password">
                    <button name="change-pass" type="button" className="home-button03 button">
                        <img alt="image" src={passwordIcon} className="home-image05" />
                    </button>
                </Link>
                <Link to="/reprint">
                    <button name="print-s" type="button" className="home-button04 button">
                        <img
                            alt="image"
                            src={printIcon}
                            className="home-image06"
                        />
                    </button>
                </Link>
                <Link to='/account'>

                    <button id="account" type="button" className="home-button05 button">
                        <img alt="image" src={accountIcon} className="home-image07" />
                    </button>

                </Link>

                <Link to='/print'>
                    <button id="print" type="button" className="home-button06 button">

                        <img alt="image" src={printerIcon} className="home-image08" />
                    </button>
                </Link>
                <button type="button" className="home-button07 button">
                    <img alt="image" src={removeIcon} className="home-image09" />
                </button>
                <button id="r100" type="button" className="home-button08 bet-money button" onclick="points()">
                    <img alt="image" src={r100} className="home-image10" />
                </button>
                <button id="r50" type="button" className="home-button09 bet-money button" onclick="points()">
                    <img alt="image" src={r50} className="home-image11" />
                </button>
                <span id="n9" className="home-text10 label-num"></span>
                <span id="n5" className="home-text11 label-num"></span>
                <span id="n12" className="home-text12 label-num"></span>
                <span id="n11" className="home-text13 label-num"></span>
                <span id="n10" className="home-text14 label-num"></span>
                <span id="n1" className="home-text15 label-num"></span>
                <span id="n8" className="home-text16 label-num"></span>
                <span id="n7" className="home-text17 label-num"></span>
                <span id="n6" className="home-text18 label-num"></span>
                <span id="n2" className="home-text19 label-num"></span>
                <span id="n3" className="home-text20 label-num"></span>
                <span id="n4" className="label-num"></span>
                <button id="r500" type="button" className="home-button10 bet-money button" onclick="points()">
                    <img alt="image" src={r500} className="home-image12" />
                </button>
                <button id="r1000" type="button" className="home-button11 bet-money button" onclick="points()">
                    <img alt="image" src={r1k} className="home-image13" />
                </button>
                <span className="home-text22">Balance</span>
                <h1 className="home-text23">Draw</h1>
                <button id="b1" type="button" className="home-button12 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum1} className="home-image14" />
                </button>
                <button id="b5" type="button" className="home-button13 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum5} className="home-image15" />
                </button>
                <button id="b4" type="button" className="bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum4} className="home-image16" />
                </button>
                <button id="b2" type="button" className="home-button15 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum2} className="home-image17" />
                </button>
                <button id="b3" type="button" className="home-button16 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum3} className="home-image18" />
                </button>
                <button id="b6" type="button" className="home-button17 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum6} className="home-image19" />
                </button>
                <button id="b8" type="button" className="home-button18 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum8} className="home-image20" />
                </button>
                <button id="b7" type="button" className="home-button19 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum7} className="home-image21" />
                </button>
                <button id="b10" type="button" className="home-button20 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum10} className="home-image22" />
                </button>
                <button id="b9" type="button" className="home-button21 bet-num button" onclick="write_it()">
                    <img alt="image" src={betNum9} className="home-image23" />
                </button>
                <button id="b12" type="button" className="home-button22 bet-num button1 button" onclick="write_it()">
                    <img alt="image" src={betNum12} className="home-image24" />
                </button>
                <button id="b11" type="button" className="home-button23 bet-num button">
                    <img alt="image" src={betNum11} className="home-image25" onclick="write_it()" />
                </button>
                <input type="text" placeholder=" " className="home-textinput input" />
                <span className="home-text28">
                    <span>Barcode</span>
                    <br />
                </span>
                <button id="r10" type="button" className="bet-money button" onclick="points()">
                    <img alt="image" src={r10} className="home-image26" />
                </button>
                <button id="r20" type="button" className="home-button25 bet-money button" onclick="points()">
                    <img alt="r20" src={r20} className="home-image27" />
                </button>
                <button id="lottery" type="button" className="home-button26 button">
                    <img alt="image" src={lotteryIcon} className="home-image28" />
                    <span>Button</span>
                </button>
                <button id="adv" type="button" className="home-button27 button">
                    <span className="home-text32">
                        <span>ADV</span>
                        <br />
                    </span>
                </button>
                <img alt="image" src={frame1} className="home-image29" />
                <label id="total" className="home-text35"></label>
                <label id="bal" className="home-text36">
                    <span>161.68</span>
                    <br />
                </label>
            </div>
            <div className="circle">

                <Link to="/"><span><b>x</b></span></Link>
            </div>
            <div id="clock" className="clock">
                <span>clock</span>
            </div>
            <div id="timer" className="timer">
                <span>timer</span>
            </div>
        </>
    )
}
export default Home