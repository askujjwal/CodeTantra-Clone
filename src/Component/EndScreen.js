import React from 'react'
import Navbar from '../Navbar'
import './TestFooter.css';
import imgL from "./logo-new.png";
export default function EndScreen() {
  return (
    <>
    <Navbar/>
      <div className="container" style={{minWidth: '100%',marginTop:'2rem'}}>
        <div id="centerContentDiv" className="row justify-content-center">
            <div id="homeCenterDiv" className="col-12 col-lg-11 endTest_div">
                
                <div className="mt-3 text-center d-none" id="seaOsWarning"></div>
                <div id="testsPanelDiv" className="card card-primary darkShadow border-primary" style={{marginTop:'30px'}}>
                    <div className="card-header bg-info p-2" id="">
                        <div>
                            <span id="tests" className="card-title font-weight-bold text-white" style={{fontSize: '20px',paddingLeft: '15px'}}>Tests</span>
                            <div className="float-right" style={{paddingRight: '9px',marginTop: '3px',marginBottom: '0'}}>
                                <form name="filterTestsForm" id="filterTestsForm" method="get" action="tests.jsp">
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend d-block">
                                            <span className=" input-group-text" id="basic-addon1">Search between : </span>
                                        </div>
                                        <input aria-label="start date" className="form-control input input-group-text dateTime" id="startDate" name="startDate" value="2024/09/22" fdprocessedid="d9rznpn"/>
                                        <input aria-label="start date" className="form-control input input-group-text dateTime" id="endDate" name="endDate" value="2024/09/27" fdprocessedid="we3tc"/>
                                        <span className="input-group-append d-block ">
												<button className="searchTestsBtn btn-sm btn-success srch_btn"><i className="fa fa-search"></i> Search</button>
											</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="testsBody" style={{fontSize: '14px'}} className="card-body table-responsive">
                        <table className='table table-bordered table-striped'>
                           <thead>
                            <tr>
                                <th style={{width:"2.5%"}}>#</th>
                                <th style={{width:"35%"}}>Test Name</th>
                                <th className='text-center'>Time</th>
                                <th className='text-center' style={{width:"13%"}}>Status</th>
                                <th className='text-center' style={{width:"8%"}}>Result</th>
                            </tr>
                           </thead>
                           <tbody>
                            <tr>
                                <td>1</td>
                                <td>THCA1_PEA-308_27-09-2024-03:00:00</td>
                                <td >
                                    <p style={{marginBottom:'0.3rem'}}><strong>Start Time</strong></p>
                                    <p style={{marginBottom:'0.3rem'}}>27 sep 2024 03:00:00 (India Standard Time)</p>
                                    <p style={{marginBottom:'0.3rem'}}><strong>Duration</strong></p>
                                    <p style={{marginBottom:'0.3rem'}}>45 Minutes</p>
                                </td>
                                <td className='text-center'><span class="badge rounded-pill text-bg-success" style={{fontSize:'0.7rem'}}>Completed</span></td>
                                <td className='text-center'>-</td>
                            </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='test_foot' style={{justifyContent: 'center'}}>
        <img src={imgL} alt="" style={{marginLeft:'15rem',height:'1.6rem'}}/>
    </div>
    </>
  )
}
