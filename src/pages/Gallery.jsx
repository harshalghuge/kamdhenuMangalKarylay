import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const photos=[
["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=80","Wedding venue"],
["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=80","Wedding table decor"],
["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80","Wedding celebration"],
["https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=80","Wedding lights"],
["https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=80","Event decoration"],
["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=80","Reception setup"]
];
export default function Gallery({language}) {
 const [selected,setSelected]=useState(null); const mr=language==="mr";
 return <main className="min-h-screen px-4 pb-24 pt-32 sm:px-8"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow={mr?"फोटो संग्रह":"OUR PHOTOGRAPHS"} title={mr?"गॅलरी":"Gallery"} description={mr?"आमच्या जागेची आणि कार्यक्रमांच्या सजावटीची झलक पहा.":"Explore venue inspiration and event moments. We will replace these sample images with actual venue photographs."}/><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">{photos.map(([src,alt],i)=><button key={i} onClick={()=>setSelected(i)} className="group overflow-hidden rounded-xl bg-[#eee5d9] text-left"><img loading="lazy" src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"/></button>)}</div></div>
 <AnimatePresence>{selected!==null&&<motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}><button aria-label="Close image" className="absolute right-5 top-5 text-white"><X size={30}/></button><img src={photos[selected][0]} alt={photos[selected][1]} className="max-h-[85vh] max-w-full rounded-lg object-contain" onClick={e=>e.stopPropagation()}/></motion.div>}</AnimatePresence>
 </main>;
}
