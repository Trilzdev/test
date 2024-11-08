import React from 'react'
import logo from './assets/fuprelogo.jpg'
import bg1 from './assets/fupreBus.jpg'
import usa from './assets/usa.svg'
import donate from './assets/fupreDonation.jpg'
import admission from './assets/admission.png'
import postutme from './assets/postutme.jpeg'
import sitelogo from './assets/site-icon.jpg'
import tetfund from './assets/fupreTetfund.jpg'
import { GoGoal } from "react-icons/go";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaCaretDown, FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./App.css"
import Card from './components/Card'
import { BiPhone } from 'react-icons/bi'
import { MdMail, MdMenu } from 'react-icons/md'
const infolist = [
  {
    "title": "INVITATION TO THE 2024/2025 POST-UTME SCREENING EXERCISE FOR ADMISSION",
    "writup": "This is to inform all candidates who chose the Federal University of Petroleum Resources, Effurun, (FUPRE) Delta State, as their first choice and scored 150 and above in the 2024 Unified Tertiary Matriculation Examination (UTME) that: Online application commences on..."
  },
  {
    "title": "APPROVAL FOR THE ESTABLISHMENT OF FULL-TIME MODE UNDERGRADUATE PROGRAMMES IN THE FEDERAL EFFURUN, DELTA STATE.",
    "writup": "This is to inform interested Unified Tertiary Matriculation Examination, (UTME) candidates and the general public that the National Universities Commission, (NUC) has given approval to the Federal University of Petroleum Resources, Effurun, (FUPRE) Delta State, to..."
  },
  {
    "title": "Admission! Admission!! Admission!!!",
    "writup": "The 2024/2025 Admission into the Federal University of Petroleum Resources, sub-degree program is out! PREAMBLE: The Federal University of Petroleum Resources, Effurun (FUPRE) is the first petroleum university in Africa and..."
  },
  {
    "title": "2023/2024 ACADEMIC SESSION MATRICULATION CEREMONY",
    "writup": "This is to inform all fresh students that the 2023/2024 Academic Session Matriculation ceremony has been scheduled for Wednesday, 31st January, 2024 in the University Main Auditorium by 10.00 a.m. To this end, all fresh students are requested to collect academic..."
  },
  {
    "title": "2023/2024 Academic Calendar",
    "writup": "First Semester: Registration for Fresh Students (Nov 6, 2023 - Jan 19, 2024), Registration for Returning Students (Dec 4, 2023), Lectures Begin for Fresh Students (Jan 8, 2024). [Incomplete calendar, please refer to the university website for complete details]"
  },
  {
    "title": "Important Notice to Admitted Candidates for the 2023/2024 Academic Session",
    "writup": "This notice is to inform all admitted candidates for the 2023/2024 academic session that they are required to complete their registration within the specified period. Please ensure you have all necessary documents and comply with the registration guidelines provided by the university."
  },
  {
    "title": "College of Maritime and Offshore Studies",
    "writup": "New Courses: B.Sc. Maritime Economics and Finance, B.Sc. Maritime Transport and Logistics. Post-UTME Online Application: Open for the 2022/2023 Admission Exercise. [Note: Application deadlines and Post-UTME screening dates not provided in the image.]"
  }
]
const App = () => {
  return (
    <div className='bg-neutral-200'>
      <div>
        <div className=' sticky top-0'>
          <div className='bg-neutral-900 py-1 relative flex justify-center max-sm:justify-between max-sm:px-6 max-sm:hidden items-center  text-neutral-300 '>
            <div className='font-medium text-lg max-sm:text-xs'>This webpage is a demo to illustrate the Customer Support System</div>
            <div className='absolute right-16 flex gap-2 items-center text-neutral-50 font-semibold cursor-pointer'>
              <div className=' rounded-full overflow-hidden'><img src={usa} alt="ss" className='w-6 h-6' /></div>
              <div>ENG</div>
              <FaCaretDown />
            </div>
          </div>
        </div>
        <header className=' flex items-center justify-between py-2 bg-neutral-100 px-16 max-sm:px-8 '>
          <div className=' h-30 max-sm:h-16'>
            <img src={logo} alt="" className='h-full mix-blend-multiply' />
          </div>
          <div className='font-semibold text-xl flex flex-col gap-y-4'>
            <div className=' text-neutral-800 sm:hidden text-3xl'>
              <MdMenu/>
            </div>
            <div className='flex gap-x-8 justify-end text-neutral-800 max-sm:hidden'>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Convocation</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>FUPRE Inovvation Projects</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Email</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Careers</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Staff</a>
            </div>
            <div className='flex gap-x-8 justify-end text-neutral-800 max-sm:hidden'>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Programmes</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Colleges</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Academics</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Centers & Units</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>Portals</a>
              <a href="#" className='hover:bg-[#3b1c1c] p-1 rounded-sm px-2 duration-200 hover:text-neutral-300'>About Us</a>
            </div>
          </div>
        </header>
      </div>
      <section className='bg-black h-[700px]'>
        <Carousel showArrows={true}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={500}>
          <div className='h-[700px] relative bg-front'>
            <div className='absolute top-0 left-0 backdrop-brightness-50 w-full h-full flex justify-center items-center max-sm:text-2xl text-neutral-50 font-bebas text-5xl leading-[1.2]'>
              <p>Welcome<br className='font-[]' /> to The first Petroleum University in Africa and the Sixth in the world. <br />Federal University of Petroleum, Effurun.</p>
            </div>
          </div>
          <div className='h-[700px] relative bg-class'>
            <div className='absolute top-0 left-0 backdrop-brightness-50 w-full h-full flex flex-col gap-3 justify-center items-center text-neutral-50 '>
              <p className='font-bebas text-5xl max-sm:text-2xl'>Providing research and training in Oil and Gas</p>
              <div>
                <button className='text-2xl max-sm:text-base bg-neutral-950 py-4 font-semibold text-neutral-200 hover:bg-[#72727269] px-6 duration-200 ease-in-out'>
                  <p>Start your journey</p>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      <section className='bg-neutral-100 px-32 py-24 max-sm:hidden' >
        <div className='relative'>
          <div className='p-10  border-8 border-l-0 border-neutral-900 flex flex-col gap-8 absolute top-1/2 -translate-y-1/2 bg-neutral-100 '>
            <div className='flex flex-col gap-3'>
              <p className='font-bebas text-6xl style-title'>Apply for Admission</p>
              <p className='text-xl text-neutral-400'>Admission into our programmes for the 2024/2025 academic session is currently in progress.</p>
              <p className='text-3xl text-neutral-600 w-[950px] leading-[1.5]'>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career to discover a field they’re passionate about and dare to lead it.</p>
            </div>
            <div className=''>
              <button className='bg-neutral-900 text-neutral-50 px-6 py-3 text-xl'>Apply Now</button>
            </div>
          </div>
          <div className='min-h-[600px] overflow-hidden'>
            <img src={bg1} alt="" />
          </div>
        </div>
      </section>
      <section className=' bg-neutral-900 border-b-8 border-b-[#1b1a24] py-16 px-16 max-sm:p-8'>
        <div className='pl-16 pb-8 max-sm:pl-8'>
          <p className='font-bebas text-6xl style-title text-[#a39ac0] max-sm:text-4xl'>Articles</p>
        </div>
        <div className=' flex justify-evenly max-sm:flex-wrap gap-y-8'>
          <div className=' squircle w-[500px] bg-neutral-100 flex flex-col justify-between gap-6 pb-8'>
            <div className='h-60 overflow-hidden'>
              <img className='w-full' src={donate} alt="" />
            </div>
            <div className='flex flex-col gap-2 px-8'>
              <p className=' font-bebas text-4xl style-title'>Give to FUPRE</p>
              <p className='font-semibold text-xl text-neutral-600'>Become a donor today and contribute to the growth of our institution. Assist us as we build and shape the minds and futures of the next-generation industry leaders.</p>
            </div>
            <div className='px-8 pt-2 flex justify-between items-center text-neutral-100 font-semibold  '>
              <p className='font-medium text-neutral-400 flex items-center gap-2'>Find out how<FaArrowRightLong /></p>
              <button className='bg-black px-8 py-3 text-xl'>Click Here</button>
            </div>
          </div>
          <div className='w-[500px] bg-neutral-100 flex flex-col gap-6 pb-8'>
            <div className='h-60 overflow-hidden'>
              <img className='w-full' src={postutme} alt="" />
            </div>
            <div className='flex flex-col gap-2 px-8'>
              <p className=' font-bebas text-4xl style-title'>INVITATION TO THE 2024/2025... </p>
              <p className='font-semibold text-xl text-neutral-600'>This is to inform all candidates who chose the Federal University of Petroleum Resources, Effurun, (FUPRE) Delta State, as their first choice and scored 150 and above in ...</p>
            </div>
            <div className='px-8 pt-2 flex justify-between items-center text-neutral-100 font-semibold  '>
              <p className='font-medium text-neutral-400 flex items-center gap-2'>Read More<FaArrowRightLong /></p>
              <button className='bg-black px-8 py-3 text-xl'>Click Here</button>
            </div>
          </div>
          <div className='w-[500px] bg-neutral-100 flex flex-col gap-6 pb-8'>
            <div className='h-60 overflow-hidden'>
              <img className='w-full' src={admission} alt="" />
            </div>
            <div className='flex flex-col gap-2 px-8'>
              <p className=' font-bebas text-4xl style-title'>Admission! Admission!! Admission!!!</p>
              <p className='font-semibold text-xl text-neutral-600'>Admission! Admission!! Admission!!! The 2024/2025 Admission into the Federal University of Petroleum Resources, sub-degree program is out! PREAMBLE: The Federal ...</p>
            </div>
            <div className='px-8 pt-2 flex justify-between items-center text-neutral-100 font-semibold  '>
              <p className='font-medium text-neutral-400 flex items-center gap-2'>Read More<FaArrowRightLong /></p>
              <button className='bg-black px-8 py-3 text-xl'>Click Here</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black py-16'>
        <Carousel showArrows={true}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={500}>
          {
            infolist.map((item) => {
              return (
                <Card writeup={item.writup} title={item.title} />
              )
            })
          }
        </Carousel>
      </section>
      <section className='min-h-[600px] bg-black'>
        <div className=' bg-neutral-900  '>
          <div className=' w-full px-16 py-20 max-sm:px-2'>
            <div className='flex justify-between max-sm:flex-wrap max-sm:gap-y-8'>
              <div className=' bg-[#101d2e] w-[550px] h-[550px] text-center flex flex-col items-center justify-center gap-6 p-16 max-sm:px-8'>
                <div className='text-8xl max-sm:text-6xl text-neutral-300'><GoGoal /></div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-6xl max-sm:text-2xl font-bebas text-neutral-300'>Vision</p>
                  <p className='text-2xl text-neutral-400'>The Vision of the University is to be the premier international institution with state-of-the-art facilities to provide for the petroleum and allied sectors, world-class education, training, research, consultancy and extension services.</p>
                </div>
              </div>
              <div className=' bg-[#3b1c1c] w-[550px] h-[550px] text-center flex flex-col items-center justify-center gap-6 p-16'>
                <div className='text-8xl max-sm:text-6xl text-neutral-300'><GoGoal /></div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-6xl max-sm:text-2xl font-bebas text-neutral-300'>MISSION</p>
                  <p className='text-2xl text-neutral-400'>The mission of the University is to develop top-quality human resources, provide advanced education and training, conduct research and consultancy, and lead in promoting economic development within the oil, gas, and energy industry and the broader community.</p>
                </div>
              </div>
              <div className=' bg-[#2e2314] w-[550px] h-[550px] text-center flex flex-col items-center justify-center gap-6 p-16'>
                <div className='text-8xl max-sm:text-6xl text-neutral-300'><GoGoal /></div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-6xl max-sm:text-2xl font-bebas text-neutral-300'>Philosophy</p>
                  <p className='text-2xl text-neutral-400'>To promote the advancement of knowledge and produce graduates who are technopreneurs with concern for the promotion of environmentally friendly technological solutions in the practice of their profession.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='min-h-[400px] px-16 pr-32 flex gap-x-36 max-sm:gap-y-8 items-center justify-between max-sm:justify-center max-sm:flex-col max-sm:pr-16'>
          <div className=' '>
            <img className='mix-blend-multiply h-80 max-sm:h-20' src={sitelogo} alt="" srcset="" />
          </div>
          <div className='text-neutral-800 text-center font-medium text-xl gap-2 flex flex-col max-sm:hidden'>
            <p className=' text-2xl text-blue-950'>Links</p>
          </div>
          <div className='text-neutral-800 text-center font-medium text-xl gap-2 flex flex-col max-sm:hidden'>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Home</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Programmes</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Academics</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Portals</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>About Us</a>
          </div>
          <div className='text-neutral-800 text-center font-medium text-xl gap-2 flex flex-col max-sm:hidden'>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Convocation</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>FUPRE Inovvation Projects</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Email</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Careers</a>
            <a href="#" className='hover:translate-x-2 duration-200 hover:scale-105 hover:text-neutral-600'>Staff</a>
          </div>
          <div className='text-neutral-800 text-center font-medium text-xl gap-2 flex flex-col'>
            <p className=' flex items-center'><BiPhone className='text-4xl text-neutral-700 pr-2'/>+234 8059 392 2334</p>
            <p className=' flex items-center'><MdMail className='text-4xl text-neutral-700 pr-2'/>info@fupre.edu.ng</p>
          </div>
        </div>
        <div className='bg-neutral-900 py-2 flex max-sm:flex-col max-sm:items-center max-sm:gap-3 max-sm:py-8 max-sm:px-4 gap-x-[600px]'>
          <p className=' text-neutral-100 pl-24 max-sm:pl-0 text-center'>
            Copyright Ⓒ 2024 All rights reserved | Federal University of Petroleum Resources | Powered by <span className='font-bold'>OGHENE MARO</span>
          </p>
          <div className='flex text-neutral-600 text-2xl gap-x-6'>
            <FaXTwitter className='cursor-pointer hover:text-neutral-400 duration-200' />
            <FaInstagram className='cursor-pointer hover:text-neutral-400 duration-200' />
            <FaYoutube className='cursor-pointer hover:text-neutral-400 duration-200' />
            <FaFacebook className='cursor-pointer hover:text-neutral-400 duration-200' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App