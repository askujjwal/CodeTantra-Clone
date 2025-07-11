import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './cd.css';

export default function Navbar() {
  return (
    <>
       <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-block d-print-none p-1 p-md-2" id="cssmenu" style={{backgroundColor:'#2C3E50'}}>
    <button class="navbar-toggler py-0 border-0 pl-0" type="button" data-toggle="offcanvas" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand d-lg-none d-print-none"><img src="https://s3.ap-south-1.amazonaws.com/ct-client-logos/logos/lovelyprofessionaluniversity" alt="CodeTantra" style={{maxWidth: '100', height: '30px'}}/></span>
    <span class="d-none text-right bg-transparent"><img src="/img/logo-new.png" alt="CodeTantra" style={{maxWidth: '100%'}}/></span>
    <div class="navbar-collapse offcanvas-collapse" id="navbarSupportedContent">
            
                
<ul class="navbar-nav mr-auto">
    <li class="d-none d-lg-block">
        <span class="p-1 d-block">
             <img src="https://s3.ap-south-1.amazonaws.com/ct-client-logos/logos/lovelyprofessionaluniversity" style={{height: '35px'}} alt="Home"/>
        </span>
    </li>
    <li class="nav-item"><a class="nav-link" href="/secure/home.jsp" style={{whiteSpace: 'nowrap'}}><i class="fa fa-home"></i><span> Home</span> </a></li>
    
    
    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="menu" aria-haspopup="true" title="Learn anywhere" aria-label="Learn anywhere menu"><span>Learn Anywhere</span></a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/secure/tla/m.jsp" role="menuitem" title="View meetings" aria-label="Click to view meetings">View Meetings</a></li>
        </ul>
    </li>
    
    
</ul>

            
            <ul class="navbar-nav ml-md-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> 12212836.st@lpu.in </a>
                    <ul class="dropdown-menu" style={{paddingLeft: '0.75rem'}}>
                        
                        <li><a class="dropdown-item" href="/secure/member-profile.jsp"><span>Update Profile</span> </a></li>
                        
                    </ul>
                </li>
                
                <li class="nav-item"><a class="nav-link" id="contactHelp" href="#" onclick="openSupportDialog()" role="contentinfo"><span>Support</span> </a></li>
                <li class="nav-item"><a class="btn btn-sm btn-danger" id="logoutBtn" style={{color: 'white', fontWeight: 'bold', marginTop: '0.25rem', whiteSpace: 'nowrap'}} role="button" aria-label="Logout" title="Click to logout"> Logout <i class="fa fa-sign-out" aria-hidden="true"></i> </a></li>
            </ul>
        </div>
</nav>
    </>
  )
}
