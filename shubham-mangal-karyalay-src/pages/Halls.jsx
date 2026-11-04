import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { business } from "../config/business";
import SectionHeading from "../components/SectionHeading";

export default function Halls({language}) {
  const mr=language==="mr";
  return <main className="min-h-screen px-5 pb-20 pt-32 sm:px-8">
    <div className="mx-auto max-w-6xl"><SectionHeading eyebrow={mr?"जागा आणि सुविधा":"VENUE INFORMATION"} title={mr?"आमचे हॉल आणि सुविधा":"Halls & Facilities"} description={mr?"तुमच्या कार्यक्रमासाठी योग्य जागा निवडण्यासाठी चौकशी करा.":"Contact us for hall capacity, availability, facilities and pricing details."}/>
      <div className="grid gap-7 md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=80" alt="Banquet hall interior" className="h-72 w-full rounded-2xl object-cover sm:h-96"/>
        <div className="flex flex-col justify-center"><p className="text-xs font-bold tracking-[2px] text-[#a77942]">SHUBHAM MANGAL KARYALAY</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{mr?"तुमच्या कार्यक्रमासाठी योग्य जागा":"A space for your special occasion"}</h2><p className="mt-4 text-sm leading-7 text-[#75665c]">{mr?"हॉलची क्षमता, उपलब्ध सुविधा, सजावट आणि दर याबद्दल अचूक माहितीसाठी आमच्याशी संपर्क साधा.":"Ask our team about guest capacity, air conditioning, dining arrangements, parking, decoration options and current pricing."}</p><ul className="mt-5 space-y-3 text-sm">{["Guest capacity / पाहुण्यांची क्षमता","AC and dining details / एसी व जेवण व्यवस्था","Parking and access / पार्किंग","Availability and pricing / उपलब्धता व दर"].map(x=><li key={x} className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#a77942]"/>{x}</li>)}</ul><Link to="/contact" className="mt-7 inline-flex w-fit rounded-full bg-[#873b35] px-6 py-3.5 text-sm font-bold text-white">{mr?"चौकशी करा":"Enquire about the hall"}</Link></div>
      </div>
      <div className="mt-12 rounded-2xl bg-[#f0e9dd] p-6 sm:p-8"><p className="flex items-center gap-2 text-sm text-[#51433c]"><MapPin size={18}/>{business.address}</p><p className="mt-2 text-xs leading-6 text-[#75665c]">{mr?"क्षमता, दर आणि सुविधांची माहिती कार्यालयाकडून निश्चित करून घ्या.":"Please confirm capacity, pricing and available facilities directly with the venue."}</p></div>
    </div>
  </main>;
}
