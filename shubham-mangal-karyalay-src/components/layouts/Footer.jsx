import { Link } from "react-router-dom";
import { MapPin, Phone, Flower2 } from "lucide-react";
import { business } from "../../config/business";

export default function Footer({ language }) {
  const mr = language === "mr";
  return <footer className="bg-[#2e211e] px-5 pb-28 pt-14 text-white lg:pb-12">
    <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-2">
      <div><div className="flex items-center gap-3"><Flower2 className="text-[#d6b47e]" size={30}/><div><h2 className="font-display text-2xl">SHUBHAM</h2><p className="text-[9px] tracking-[3px] text-[#d6b47e]">MANGAL KARYALAY</p></div></div><p className="mt-5 max-w-md text-sm leading-7 text-white/65">{mr ? "तुमच्या खास सोहळ्यांसाठी योग्य ठिकाण." : "A welcoming venue for weddings and special celebrations."}</p></div>
      <div className="space-y-4 text-sm text-white/75"><p className="flex gap-3"><MapPin size={18} className="shrink-0 text-[#d6b47e]"/>{business.address}</p><p className="flex gap-3"><Phone size={18} className="shrink-0 text-[#d6b47e]"/><a href={business.callLink}>{mr ? "संपर्कासाठी चौकशी करा" : "Contact us for enquiries"}</a></p><div className="flex gap-5 pt-2"><Link to="/halls" className="hover:text-white">{mr ? "हॉल" : "Halls"}</Link><Link to="/gallery" className="hover:text-white">{mr ? "गॅलरी" : "Gallery"}</Link><Link to="/contact" className="hover:text-white">{mr ? "संपर्क" : "Contact"}</Link></div></div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-5 text-xs text-white/45">© {new Date().getFullYear()} Shubham Mangal Karyalay. All rights reserved.</div>
  </footer>;
}
