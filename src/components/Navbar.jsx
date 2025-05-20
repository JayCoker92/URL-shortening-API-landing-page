import { useState } from "react";
import logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/ci_hamburger-lg.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className='header max-width py-5'>
     <div className="flex items-center justify-between">
      <article className="flex items-center">
        <img src={logo} alt="" className="animate__animated animate__flip"/>
       <nav className="hidden md:block md:ml-5">
        <ul className="flex items-start justify-start">
          <li>
            <button className="text-[var(--GrayishViolet)] hover:text-[var(--VeryDarkViolet)] cursor-pointer">Features</button> 
          </li>
          <li className="my-5 md:my-0 md:mx-5">
            <button className="text-[var(--GrayishViolet)] hover:text-[var(--VeryDarkViolet)] cursor-pointer">Pricing</button>
          </li>
          <li>
            <button className="text-[var(--GrayishViolet)] hover:text-[var(--VeryDarkViolet)] cursor-pointer">Resources</button>
          </li>
        </ul>
      </nav> 
      </article>
     

      {isOpen && ( 
        <div className="absolute left-5 right-5 top-20 rounded bg-[var(--VeryDarkBlue)] text-slate-200 text-center py-10 md:relative md:top-0 md:right-0 md:left-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
        <nav className="md:hidden">
        <ul className="flex flex-col items-center justify-center">
          <li>
            <button>Features</button> 
          </li>
          <li className="my-5">
            <button>Pricing</button>
          </li>
          <li>
            <button>Resources</button>
          </li>
        </ul>
      </nav> 
     
     <ul className="flex  flex-col items-center justify-center ">
      <li className="my-5">
         <button className="text-[var(--GrayishViolet)]">Login</button> 
      </li>
      <li>
        <button className='btn-cta rounded-full'>Sign Up</button>
      </li>
     </ul>
    </div> 
   )}

   <div className="hidden md:block">
    <ul className="flex items-center ml-5">
      <li className="my-5 md:my-0 md:mr-5">
        <button className="text-[var(--GrayishViolet)] cursor-pointer hover:text-[#333337]">Login</button>
      </li>
      <li>
        <button className='btn-cta rounded-full'>Sign Up</button>
      </li>
     </ul>
   </div>

   <button onClick={()=> setIsOpen(!isOpen)} className="uppercase text-sm tracking-wide md:hidden">
   <img src={HamburgerIcon} alt="" />
   </button>
</div>
   
    </header>
    </>
  )
}

export default Navbar