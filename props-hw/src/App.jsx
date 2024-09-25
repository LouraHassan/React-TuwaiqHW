import Nav from './components/Nav'
import Card from './components/Card'
import Step from './components/Step'
import Footer from './components/Footer'
import join from './assets/user-check.png'
import log from './assets/pointer-check.png'
import mail from './assets/mail.png'

import './App.css'

function App() {


  return (
    <>
      <Nav></Nav>
      <div className='content'>
        <div className='search-div'>
          <h4>المعسكرات والبرامج </h4>
          <div>
            <button className='search-btn activeBtn' >الكبار</button>
            <button className='search-btn' >الناشئون</button>
          </div>
          <div className='filter-icon'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
          </div>
</div>
      <div className='grid-back'>
      <div className='cards-grid '>
      <Card type='لقاء' name='علم النفس السيبراني' location='الرياض' duration='يوم واحد' date='09/29/2024'></Card>
      <Card type='معسكر' name='أساسيات اختبار الاختراق' location='الرياض' duration=' 12 اسبوع' date='10/14/2024'></Card>
      <Card type='برنامج' name='أساسيات لحام الدوائر الإلكترونية' location='الرياض' duration='أسبوع واحد' date='10/20/2024'></Card>
      <Card type='معسكر' name='تطوير واجهة وتجربة المستخدم' location='الرياض' duration='اسبوع' date='08/17/2024'></Card>
      <Card type='لقاء' name='تجربة المستخدم عن قرب' location='الرياض' duration='يوم واحد' date='08/25/2024'></Card>
      <Card type='برنامج' name='مهارات تقنية المعلومات' location='الرياض' duration='أسبوع واحد' date='09/15/2024'></Card>   
      </div>
        </div>
        <div className='more-div'>

        <button className='btn more-btn'>تحميل المزيد</button>
        </div>
        <div className='steps-div  d-flex flex-column align-items-center'>
          <h2>خطوات التسجيل</h2>
          <div className='w-75 h-100 d-flex flex-lg-row-reverse flex-column justify-content-around'>
            <Step icon={join} text='الانضمام إلى المنصة'></Step>
            <hr />
            <Step icon={log} text='التسجيل في المعسكر او البرنامج'></Step>
<hr />
            <Step icon={mail} text='انتظار رسالة القبول'></Step>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
