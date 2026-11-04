
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

// EVENT GALLERY DATA
const galleryImages = [
  {
    id: 1,
    title: "Wedding",
    marathi: "लग्न समारंभ",
    category: "WEDDING CELEBRATION",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    ],
    size: "large",
  },
  {
    id: 2,
    title: "Engagement",
    marathi: "साखरपुडा",
    category: "SPECIAL MOMENTS",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    ],
    size: "small",
  },
  {
    id: 3,
    title: "Reception",
    marathi: "रिसेप्शन",
    category: "GRAND CELEBRATIONS",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    ],
    size: "small",
  },
  {
    id: 4,
    title: "Birthday",
    marathi: "वाढदिवस",
    category: "BIRTHDAY CELEBRATIONS",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    ],
    size: "small",
  },
  {
    id: 5,
    title: "Baby Shower",
    marathi: "डोहाळे जेवण",
    category: "FAMILY CELEBRATIONS",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
    ],
    size: "small",
  },
  {
    id: 6,
    title: "Naming Ceremony",
    marathi: "बारसे",
    category: "PRECIOUS MOMENTS",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
    ],
    size: "small",
  },
];

// ANIMATED GALLERY CARD
function GalleryCard({ item, index, language }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (item.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % item.images.length);
    }, 4500 + index * 250);

    return () => clearInterval(interval);
  }, [item.images.length, index]);

  const mr = language === "mr";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl bg-[#e9dfd0]
        ${
          item.size === "large"
            ? "col-span-2 row-span-2 min-h-[340px] sm:min-h-[460px] lg:min-h-[520px]"
            : "min-h-[165px] sm:min-h-[220px] lg:min-h-0"
        }`}
    >
      {/* AUTOMATIC IMAGE SLIDESHOW */}
      <AnimatePresence initial={false}>
        <motion.img
          key={item.images[currentImage]}
          src={item.images[currentImage]}
          alt={`${item.title} celebration`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

      {/* CATEGORY LABEL */}
      <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
        <span className="rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[8px] font-semibold tracking-[1px] text-white backdrop-blur-md sm:text-[9px]">
          {item.category}
        </span>
      </div>

      {/* EVENT DETAILS */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-6">
        <div>
          <h3 className="font-display text-xl text-white sm:text-2xl lg:text-3xl">
            {item.title}
          </h3>

          <p className="mt-1 text-xs text-white/80 sm:text-sm">
            {item.marathi}
          </p>
        </div>

        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#873b35] sm:h-11 sm:w-11">
          <ArrowUpRight size={19} />
        </div>
      </div>
    </motion.div>
  );
}

// MAIN GALLERY PREVIEW
export default function GalleryPreview({ language = "en" }) {
  const mr = language === "mr";

  return (
    <section className="relative overflow-hidden bg-[#faf7f0] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[10px] font-bold tracking-[3px] text-[#a77942] sm:text-xs"
            >
              {mr ? "आठवणींचा सुंदर संग्रह" : "MOMENTS WORTH REMEMBERING"}
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4 font-display text-4xl leading-tight text-[#30221e] sm:text-5xl md:text-6xl"
            >
              {mr ? (
                <>
                  प्रत्येक सोहळ्याची
                  <span className="block text-[#873b35]">
                    एक सुंदर आठवण.
                  </span>
                </>
              ) : (
                <>
                  Moments That
                  <span className="block text-[#873b35]">
                    Last Forever.
                  </span>
                </>
              )}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-[#75665c] sm:text-base"
            >
              {mr
                ? "लग्न, साखरपुडा, वाढदिवस आणि इतर खास कार्यक्रमांच्या सुंदर क्षणांची झलक."
                : "Explore beautiful celebrations, wedding moments and special occasions hosted at our venue."}
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[#873b35] px-6 py-3.5 text-sm font-semibold text-[#873b35] transition hover:bg-[#873b35] hover:text-white"
            >
              {mr ? "संपूर्ण गॅलरी पहा" : "Explore Gallery"}
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE COLLAGE */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {galleryImages.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              language={language}
            />
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#e8ddce] pt-7 sm:flex-row">
          <p className="flex items-center gap-2 text-xs text-[#75665c] sm:text-sm">
            <Images size={17} className="text-[#a77942]" />
            {mr
              ? "तुमच्या खास क्षणांना सुंदर आठवणींची जोड."
              : "Every celebration deserves a beautiful memory."}
          </p>

          <Link
            to="/gallery"
            className="text-sm font-bold text-[#873b35] hover:underline"
          >
            {mr ? "अधिक फोटो पहा →" : "View More Photos →"}
          </Link>
        </div>

      </div>
    </section>
  );
}
