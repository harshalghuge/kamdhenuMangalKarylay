import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { business } from "../../config/business";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      {/* WhatsApp Button */}
      <motion.a
        href={business.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:h-14 sm:w-14"
      >
        <FaWhatsapp size={30} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={business.callLink}
        aria-label="Call us"
        title="Call Now"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#873b35] text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#642c29] sm:h-16 sm:w-16"
      >
        <Phone size={25} strokeWidth={2.2} />
      </motion.a>
    </div>
  );
}
