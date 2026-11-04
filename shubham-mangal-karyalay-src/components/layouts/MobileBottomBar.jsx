import { Phone, MessageCircle } from "lucide-react";
import { business } from "../../config/business";

export default function MobileBottomBar({ language }) {
  const mr = language === "mr";
  return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8dfd2] bg-[#faf7f0]/95 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
    <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
      <a href={business.callLink} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#873b35] px-3 py-3 text-sm font-bold text-white active:scale-[.98]"><Phone size={17}/>{mr ? "कॉल करा" : "Call Now"}</a>
      <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23864b] px-3 py-3 text-sm font-bold text-white active:scale-[.98]"><MessageCircle size={17}/>WhatsApp</a>
    </div>
  </div>;
}
