import './index.css'
import signInIcon from '../../assets/images/sign.png'
import React from 'react'

function PrintReceipt() {
    return (
        <div className="receipt" style={{ textAlign: "left" }}>
            <span className="circle">BALAJI</span>
            <p>
                <h2>FOR AMUSEMENT ONLY</h2>

                <br />

                <h3>12 ka Power
                    Draw: <span id="print-time1">14-07-2023 01:02:18 PM</span>
                </h3>
            </p>
            <div className="container1">
                <div className="row">
                    <div className="col-lg-4">
                        <input type="hidden" className="form-control" id="input" placeholder="Enter the data" />
                    </div>
                    <div className="col-lg-8">
                        <div className="barcode-container">
                            {/* <!-- <svg id="barcode"></svg> --> */}
                        </div>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Qty</th>
                        <th>No</th>
                        <th>Qty</th>
                        <th>No</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody id="item-table">
                    {/* <!-- Table rows will be added dynamically using JavaScript --> */}
                </tbody>
            </table>
            <h3>
                Points: <span id="Points">120</span><br />
                <span id="barcode-text">D53C1C69</span> <br />
                <span id="print-time">14-07-2023 01:02:18 PM</span> <br />
                GSTIN: Under Process... <br />
                Agent: <span id="agent-id">TR041</span>
            </h3>
            <div className="col-lg-8">
                <div className="barcode-container">
                    <svg id="barcode"></svg>
                </div>
            </div>
            <img className="sig" src={signInIcon} alt="signature" />
            <p>

            </p>
            <button className="print-button" onClick={()=>window.print()}>Print</button>

        </div>
    )
}

export default PrintReceipt