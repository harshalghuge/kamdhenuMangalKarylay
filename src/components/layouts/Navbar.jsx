import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Flower2, ChevronRight } from "lucide-react";
import { business } from "../../config/business";

export default function Navbar({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const mr = language === "mr";
  const items = [
    { path: "/", en: "Home", mr: "होम पेज" },
    { path: "/halls", en: "Halls & Facilities", mr: "हॉल आणि सुविधा" },
    { path: "/gallery", en: "Gallery", mr: "गॅलरी" },
    { path: "/contact", en: "Contact", mr: "कॉन्टॅक्ट" },
  ];
  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? "text-[#873b35]" : "text-[#51433c] hover:text-[#873b35]"}`;

  return <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadfce] bg-[#faf7f0]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#c7a675] text-[#873b35]"><img src="/logo.png" alt="logo" /></span>
          <span><strong className="block font-display text-[19px] leading-5 tracking-wide sm:text-[22px]">Kamdhenu</strong><small className="mt-1 block text-[8px] font-bold tracking-[2.2px] text-[#873b35]">MANGAL KARYALAY</small></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {items.map(item => <NavLink key={item.path} to={item.path} className={navClass}>{mr ? item.mr : item.en}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => setLanguage(mr ? "en" : "mr")} className="rounded-full border border-[#d9c5a9] px-4 py-2 text-xs font-bold text-[#873b35] hover:bg-[#f0e8dc]">{mr ? "English" : "मराठी"}</button>
          <a href={business.callLink} className="inline-flex items-center gap-2 rounded-full bg-[#873b35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#642c29]"><Phone size={16}/>{mr ? "कॉल करा" : "Call Now"}</a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={() => setLanguage(mr ? "en" : "mr")} className="rounded-full border border-[#d9c5a9] px-3 py-2 text-xs font-bold text-[#873b35]">{mr ? "EN" : "मराठी"}</button>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center text-[#30221e]">{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
    <AnimatePresence>
      {open && <>
        <motion.button aria-label="Close navigation" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>
        <motion.aside initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.22}} className="fixed right-0 top-0 z-50 h-[100dvh] w-[84%] max-w-sm bg-[#faf7f0] px-6 pb-8 pt-24 shadow-2xl lg:hidden">
          <p className="mb-6 text-[10px] font-bold tracking-[3px] text-[#b18a55]">EXPLORE SHUBHAM</p>
          <nav>{items.map(item => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({isActive}) => `flex items-center justify-between border-b border-[#e9dfd0] py-5 text-lg ${isActive ? "font-bold text-[#873b35]" : "text-[#30221e]"}`}>{mr ? item.mr : item.en}<ChevronRight size={18}/></NavLink>)}</nav>
          <a href={business.callLink} className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#873b35] py-4 font-semibold text-white"><Phone size={17}/>{mr ? "कॉल करा" : "Call Now"}</a>
          <p className="mt-5 text-center text-xs leading-6 text-[#897b70]">{business.address}</p>
        </motion.aside>
      </>}
    </AnimatePresence>
  </>;
}
