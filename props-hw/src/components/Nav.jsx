import React from "react";
import logo from "../assets/logo-h-white.png";

function Nav() {
  return (
    <header className="nav-section">

    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="container-fluid d-lg-flex flex-row-reverse justify-content-between">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="d-flex">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse flex-lg-row-reverse justify-content-between text-end" id="navbarSupportedContent">
          <ul className="nav-list-1 navbar-nav mb-2 mb-lg-0 flex-lg-row-reverse text-light justify-content-around">
            <li className="my-2">الرئيسية</li>
            <li className="my-2">المعسكرات والبرامج</li>
            <li className="my-2">حول الأكاديمية</li>
            <li className="my-2">الأكادميات التابعة</li>
            <li className="my-2">مركز الإختبارات</li>
          </ul>
        <ul className="nav-list-2 navbar-nav me-auto mb-2 mb-lg-0 text-light justify-content-around">
            <li className="my-2">English</li>
            <li className="my-2">تسجيل الدخول</li>
           
          </ul>
     
        </div>
      </div>
      </nav>
      <div className="container nav-title-div">
      <h4>أكاديمية طويق</h4>
     </div>
      </header>

  );
}

export default Nav;

//       <nav className='nav-section'>
//           <div className='nav-div container'>
//           <div className='nav-div-1'>
//               <img src={logo} alt="logo" className='nav-logo'/>
//               <ul className='nav-list-1'>
//                   <li>الرئيسية</li>
//                   <li>المعسكرات والبرامج</li>
//                   <li>حول الأكاديمية</li>
//                   <li>الأكادميات التابعة</li>
//                   <li>مركز الإختبارات</li>
//               </ul>
//           </div>
//           <div className='nav-div-2'>
//               <ul className='nav-list-2'>
//                   <li>English</li>
//                   <li>تسجيل الدخول</li>
//               </ul>
//               </div>
//           </div>
//           <div className='container nav-title-div'>

//           <h4>أكاديمية طويق</h4>
//           </div>
//   </nav>
