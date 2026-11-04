import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Utensils,
  Car,
  Snowflake,
  Sparkles,
  Camera,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../config/business";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import GalleryPreview from "../components/GalleryPreview";


// const events = [
//   ["💍", "Wedding", "लग्न समारंभ"],
//   ["🌸", "Engagement", "साखरपुडा"],
//   ["🎊", "Reception", "रिसेप्शन"],
//   ["🎂", "Family Celebrations", "कौटुंबिक कार्यक्रम"],
// ];

const facilities = [
  [Users, "Spacious venue", "प्रशस्त जागा"],
  [Snowflake, "AC facility", "एसी सुविधा"],
  [Utensils, "Dining arrangement", "जेवणाची व्यवस्था"],
  [Car, "Parking", "पार्किंग"],
];
const eventSpaces = [
  {
    id: "wedding",
    en: "Wedding",
    mr: "लग्न समारंभ",
    description: "Celebrate your beautiful beginning with your family and loved ones.",
    marathiDescription: "कुटुंबीय आणि आप्तस्वकीयांसोबत आपल्या लग्नाचा सुंदर सोहळा साजरा करा.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85"
  },
  {
    id: "reception",
    en: "Reception",
    mr: "रिसेप्शन",
    description: "Make your wedding reception a memorable celebration.",
    marathiDescription: "तुमच्या रिसेप्शनचा आनंददायी आणि अविस्मरणीय सोहळा साजरा करा.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85"
  },
  {
    id: "engagement",
    en: "Engagement",
    mr: "साखरपुडा",
    description: "Celebrate the beginning of a beautiful journey together.",
    marathiDescription: "आयुष्याच्या नव्या प्रवासाची सुरुवात आनंदाने साजरी करा.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85"
  },
  {
    id: "birthday",
    en: "Birthday",
    mr: "वाढदिवस",
    description: "Make every birthday celebration special and joyful.",
    marathiDescription: "प्रत्येक वाढदिवस खास आणि आनंददायी बनवा.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85"
  },
  {
    id: "babyshower",
    en: "Baby Shower",
    mr: "डोहाळे जेवण",
    description: "Celebrate the happiness of welcoming a new member into the family.",
    marathiDescription: "कुटुंबात येणाऱ्या नव्या पाहुण्याच्या आगमनाचा आनंद साजरा करा.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=85"
  },
  {
    id: "naming",
    en: "Naming Ceremony",
    mr: "बारसे",
    description: "Celebrate your little one's special naming ceremony with loved ones.",
    marathiDescription: "आपल्या बाळाच्या बारशाचा आनंद कुटुंबीयांसोबत साजरा करा.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=85"
  }
];

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
export default function Home({ language }) {
  const mr = language === "mr";
  const [activeEvent, setActiveEvent] = useState("wedding");

  return (
    <main className="overflow-hidden bg-[#faf7f0]">
      <section className="relative flex min-h-[690px] h-[88svh] max-h-[900px] items-center">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=82"
          alt="Wedding banquet venue decorated for a celebration"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1210]/85 via-[#1b1210]/55 to-[#1b1210]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
            className="max-w-3xl"
          >
            <motion.span
              variants={reveal}
              className="inline-flex items-center gap-2 rounded-full border border-[#e9c995]/40 px-4 py-2 text-[9px] font-bold tracking-[2px] text-[#f0d5a8] sm:text-xs"
            >
              <Sparkles size={14} />
              {mr
                ? "तुमच्या आनंदाच्या क्षणांसाठी"
                : "A PLACE FOR YOUR SPECIAL MOMENTS"}
            </motion.span>
            <motion.h1
              variants={reveal}
              className="mt-7 font-display text-5xl font-medium leading-[1.17] text-white sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              {mr ? (
                <>
                  तुमचा खास दिवस,
                  <br />
                  <span className="text-[#e8c18d]">आमची जबाबदारी.</span>
                </>
              ) : (
                <>
                  Celebrate Your
                  <br />
                  <span className="text-[#e8c18d]">Special Moments.</span>
                </>
              )}
            </motion.h1>
            <motion.p
              variants={reveal}
              className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8"
            >
              {mr
                ? "लग्न, साखरपुडा, रिसेप्शन आणि इतर प्रत्येक आनंदाच्या सोहळ्यासाठी योग्य ठिकाण."
                : "A welcoming venue for weddings, engagements, receptions and the celebrations that matter most."}
            </motion.p>
            <motion.div
              variants={reveal}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#873b35] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#642c29]"
              >
                <CalendarDays size={18} />
                {mr ? "चौकशी करा" : "Enquire Now"}
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/halls"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#30221e]"
              >
                {mr ? "हॉल आणि सुविधा पहा" : "Explore Halls & Facilities"}
              </Link>
            </motion.div>
            <motion.p
              variants={reveal}
              className="mt-9 flex items-center gap-2 text-xs text-white/75 sm:text-sm"
            >
              <MapPin size={16} className="text-[#e8c18d]" />
              {business.address}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#faf7f0] to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-[#faf4e8] px-5 py-20 sm:px-8 md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-[#cda98a]/30 md:h-96 md:w-96" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-xs font-semibold tracking-[3px] text-[#a77942]">
              {mr ? "आमचे कार्यक्रम" : "CELEBRATE WITH US"}
            </span>

            <h2 className="mt-5 font-display text-4xl text-[#30221e] sm:text-5xl md:text-6xl">
              {mr ? "आमचे कार्यक्रम" : "Celebrate Every Occasion"}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#75665c]">
              {mr
                ? "तुमच्या प्रत्येक खास क्षणासाठी योग्य जागा आणि सुंदर वातावरण."
                : "From weddings to family celebrations, find the perfect space for every special occasion."}
            </p>
          </motion.div>

          {/* Event buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {eventSpaces.map((event) => {
              const active = activeEvent === event.id;

              return (
                <motion.button
                  key={event.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveEvent(event.id)}
                  className={`rounded-xl border-2 px-6 py-3.5 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base
              ${
                active
                  ? "border-[#b94a38] bg-[#b94a38] text-white shadow-lg shadow-[#b94a38]/20"
                  : "border-[#b94a38] bg-transparent text-[#a74638] hover:bg-[#b94a38] hover:text-white"
              }`}
                >
                  {mr ? event.mr : event.en}
                </motion.button>
              );
            })}
          </div>

          {/* Selected event details */}
          <AnimatePresence mode="wait">
            {eventSpaces
              .filter((event) => event.id === activeEvent)
              .map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden rounded-3xl"
                >
                  <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">
                    {/* Event image */}
                    <div className="relative h-64 overflow-hidden sm:h-80 md:h-[400px]">
                      <motion.img
                        src={event.image}
                        alt={mr ? event.mr : event.en}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Event description */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">
                      <span className="text-xs font-semibold tracking-[3px] text-[#a77942]">
                        {mr ? "तुमचा खास सोहळा" : "YOUR SPECIAL OCCASION"}
                      </span>

                      <h3 className="mt-4 font-display text-3xl text-[#30221e] sm:text-4xl">
                        {mr ? event.mr : event.en}
                      </h3>

                      <p className="mt-5 text-sm leading-8 text-[#75665c]">
                        {mr ? event.marathiDescription : event.description}
                      </p>

                      <Link
                        to={`/contact?event=${event.id}`}
                        className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#873b35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#642c29]"
                      >
                        {mr ? "चौकशी करा" : "Enquire Now"}
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>

      {/* <section className="bg-[#f0e9dd] px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow={mr ? "आमचे कार्यक्रम" : "CELEBRATE WITH US"}
          title={mr ? "प्रत्येक सोहळ्यासाठी" : "Events We Host"}
          description={
            mr
              ? "तुमच्या कुटुंबातील खास प्रसंगांसाठी जागा."
              : "A venue to bring family and friends together for special occasions."
          }
        />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {events.map(([icon, en, m], i) => (
            <motion.div
              key={en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[#e6dac9] bg-[#faf7f0] p-5 text-center sm:p-8"
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="mt-4 text-sm font-bold text-[#30221e] sm:text-base">
                {mr ? m : en}
              </h3>
            </motion.div>
          ))}
        </div>
      </section> */}
       

       {/* facilities and amenties section */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow={mr ? "तुमच्या सोयीसाठी" : "VENUE FEATURES"}
          title={mr ? "सुविधा आणि सोयी" : "Facilities & Amenities"}
          description={
            mr
              ? "कार्यक्रमाच्या नियोजनासाठी आवश्यक सुविधांची माहिती जाणून घ्या."
              : "Find the practical details that help you plan your event with confidence."
          }
        />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {facilities.map(([Icon, en, m]) => (
            <div
              key={en}
              className="rounded-2xl border border-[#e8ddce] bg-white/60 p-5 text-center sm:p-7"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f0e9dd] text-[#873b35]">
                <Icon size={23} />
              </span>
              <h3 className="mt-4 text-sm font-bold sm:text-base">
                {mr ? m : en}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/halls"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#873b35]"
          >
            {mr ? "हॉलची संपूर्ण माहिती" : "View hall details"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <GalleryPreview language={language} />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-[#642c29] md:grid-cols-2">
          <div className="p-8 text-white sm:p-12 md:p-14">
            <p className="text-[10px] font-bold tracking-[3px] text-[#e8c18d]">
              {mr ? "तुमचा खास दिवस जवळ आला आहे?" : "PLAN YOUR SPECIAL DAY"}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              {mr ? "आजच चौकशी करा!" : "Let's Plan Your Celebration"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              {mr
                ? "हॉलची माहिती आणि उपलब्धतेसाठी आमच्याशी संपर्क साधा."
                : "Contact us to ask about the venue, facilities and your preferred event date."}
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#faf7f0] px-6 py-3.5 text-sm font-bold text-[#642c29]"
            >
              {mr ? "संपर्क करा" : "Contact Us"}
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="min-h-56">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=78"
              alt="Elegant wedding table and venue decor"
              className="h-full min-h-56 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
