//  import Link from 'next/link';



// export default function Hero() {

//   return (

//     <div

//       className="hero min-h-[90vh] relative"

//       style={{

//         backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')`, // Beach Sunset

//       }}

//     >

//       <div className="hero-overlay bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>



//       <div className="hero-content text-center text-white z-10 px-4">

//         <div className="max-w-4xl mx-auto">

         

//           {/* Summer Sale Badge */}

//           <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-full text-lg font-medium mb-6 shadow-lg">

//             🔥 Summer Sale

//           </div>



//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 tracking-tight">

//             Summer Sale

//           </h1>

         

//           <h2 className="text-7xl md:text-8xl lg:text-[100px] font-black text-yellow-400 mb-6 tracking-tighter">

//             50% OFF

//           </h2>



//           <p className="text-xl md:text-2xl mb-10 max-w-lg mx-auto text-white/90">

//             On all beach essentials and summer clothing.<br />

//             Limited time offer.

//           </p>



//           <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

//             <Link

//               href="/products"

//               className="btn btn-warning btn-lg text-xl px-12 font-semibold shadow-lg hover:scale-105 transition"

//             >

//               Shop the Sale →

//             </Link>

           

//             <Link

//               href="/products"

//               className="btn btn-outline btn-lg text-white border-2 border-white text-xl px-10 hover:bg-white hover:text-black transition"

//             >

//               Browse All

//             </Link>

//           </div>

//         </div>

//       </div>



//       {/* Scroll Indicator */}

//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">

//         Scroll to explore

//         <span className="text-2xl animate-bounce">↓</span>

//       </div>

//     </div>

//   );

// } 




// "use client";

// import Link from 'next/link';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      
//       {/* মেইন ব্যানার ব্যাকগ্রাউন্ড */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
//       >
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
//       </div>

//       {/* মেইন কন্টেন্ট */}
//       <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 pt-20">
//         <div className="max-w-4xl mx-auto text-white">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold border border-white/30 mb-6">
//               ✨ Limited Time Summer Offer
//             </span>
//             <h1 className="text-7xl md:text-9xl font-extrabold mb-6 drop-shadow-2xl">
//               Summer <span className="text-yellow-400">Sale</span>
//             </h1>
//             <p className="text-2xl mb-10 text-gray-200">
//               Get up to 50% OFF on all beach essentials. Stay stylish this summer.
//             </p>
            
//             <div className="flex gap-4 justify-center">
//               <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">
//                 Shop Now
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* মারকি (Marquee) সেকশন */}
//       <div className="relative z-20 bg-yellow-400 py-3 overflow-hidden shadow-2xl rotate-[-1deg] w-[105%] -ml-[2%] mb-10">
//         <motion.div 
//           className="flex gap-10 whitespace-nowrap text-black font-black text-lg tracking-widest"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         >
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="flex gap-10">
//               <span>🚀 FREE SHIPPING WORLDWIDE</span>
//               <span>•</span>
//               <span>🔥 50% OFF EVERYTHING</span>
//               <span>•</span>
//               <span>💎 PREMIUM QUALITY</span>
//               <span>•</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
      
//     </div>
//   );
// }




// "use client";

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[80vh] flex flex-col justify-between overflow-hidden">
//       {/* ব্যাকগ্রাউন্ড */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* কন্টেন্ট */}
//       <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 pt-20 text-white">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-6xl md:text-8xl font-bold mb-3">Summer Sale</h1>
//           <h2 className="text-7xl md:text-8xl font-black text-yellow-400 mb-6">50% OFF</h2>
//           <Link href="/products" className="btn btn-warning btn-lg px-12">Shop Now</Link>
//         </div>
//       </div>

//       {/* মারকি */}
//       <div className="relative z-20 bg-yellow-400 py-3 overflow-hidden">
//         <div className="flex animate-marquee whitespace-nowrap">
//           <span className="text-black font-black text-lg mx-4">
//              🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY
//           </span>
//           <span className="text-black font-black text-lg mx-4">
//              🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[80vh] flex flex-col justify-between overflow-hidden">
      
      
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

       
//       <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 pt-20 text-white">
//         <div className="max-w-4xl mx-auto">
//           <span className="inline-block bg-orange-500 px-6 py-2 rounded-full text-sm font-semibold mb-6">
//             🔥 Summer Sale
//           </span>
//           <h1 className="text-6xl md:text-8xl font-bold mb-3 tracking-tight">
//             Summer Sale
//           </h1>
//           <h2 className="text-7xl md:text-8xl font-black text-yellow-400 mb-6">
//             50% OFF
//           </h2>
//           <Link href="/products" className="btn btn-warning btn-lg px-12 text-black font-bold">
//             Shop Now
//           </Link>
//         </div>
//       </div>

       
//       <div className="relative z-20 bg-yellow-400 py-4 overflow-hidden">
//         <div className="flex animate-marquee">
           
//           <div className="flex gap-20 whitespace-nowrap">
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[80vh] flex flex-col justify-between overflow-hidden">
      
//       {/* ব্যাকগ্রাউন্ড ইমেজ */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* মেইন কন্টেন্ট */}
//       <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 pt-20 text-white">
//         <div className="max-w-4xl mx-auto">
//           <span className="inline-block bg-orange-500 px-6 py-2 rounded-full text-sm font-semibold mb-6">
//             🔥 Summer Sale
//           </span>
//           <h1 className="text-6xl md:text-8xl font-bold mb-3 tracking-tight">
//             Summer Sale
//           </h1>
//           <h2 className="text-7xl md:text-8xl font-black text-yellow-400 mb-6">
//             50% OFF
//           </h2>
//           <Link href="/products" className="btn btn-warning btn-lg px-12 text-black font-bold bg-yellow-400 hover:bg-yellow-500 border-none">
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       {/* মারকি (Marquee) সেকশন */}
//       <div className="relative z-20 bg-yellow-400 py-4 overflow-hidden w-full">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {/* লুপের জন্য ডাবল টেক্সট */}
//           <div className="flex gap-20">
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[80vh] flex flex-col justify-between overflow-hidden">
      
//       {/* ব্যাকগ্রাউন্ড */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* মেইন কন্টেন্ট */}
//       <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 pt-20 text-white">
//         <div className="max-w-4xl mx-auto">
//           <span className="inline-block bg-orange-500 px-6 py-2 rounded-full text-sm font-semibold mb-6">
//             🔥 Summer Sale
//           </span>
//           <h1 className="text-6xl md:text-8xl font-bold mb-3 tracking-tight">
//             Summer Sale
//           </h1>
//           <h2 className="text-7xl md:text-8xl font-black text-yellow-400 mb-6">
//             50% OFF
//           </h2>
//           <Link href="/products" className="bg-yellow-400 text-black px-12 py-4 text-lg font-bold rounded-lg hover:bg-yellow-500 transition">
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       {/* মারকি (Marquee) */}
//       <div className="relative z-20 bg-yellow-400 py-3 overflow-hidden w-full border-t border-black">
//         <div className="flex animate-marquee w-max">
//           <div className="flex gap-10 whitespace-nowrap">
//             {/* ডাবল কন্টেন্ট লুপের জন্য */}
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//             <span className="text-black font-black text-lg uppercase">🚀 FREE SHIPPING WORLDWIDE • 🔥 50% OFF EVERYTHING • 💎 PREMIUM QUALITY</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] flex overflow-hidden bg-[#0d5a75]">

      {/* ── LEFT PANEL ── */}
      <div
        className={`
          relative z-10 flex flex-col justify-center px-12 md:px-20 py-16
          w-full md:w-1/2 bg-[#0d5a75]
          transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
        `}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#b8a07a] rounded-full px-4 py-1.5 w-fit mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f0a500] animate-pulse" />
          <span className="text-[#f0a500] text-xs font-semibold tracking-[0.18em] uppercase">
            Limited Time Offer
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif leading-none mb-2">
          <span className="block text-6xl md:text-7xl font-bold text-white">
            Summer
          </span>
          <span className="block text-6xl md:text-7xl italic text-[#f0a500]">
            Sale.
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-white/70 text-base mt-6 mb-10 max-w-sm leading-relaxed">
          50% OFF on all beach essentials and summer clothing. Your warmest
          season starts here.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-7 py-3.5 rounded-md bg-[#f0a500] text-[#0d3d4f] font-bold text-sm tracking-wide hover:bg-[#ffb820] active:scale-95 transition-all duration-200 shadow-lg shadow-[#f0a500]/30">
            Shop the Sale
          </button>
          <button className="px-7 py-3.5 rounded-md border border-white/40 text-white font-semibold text-sm tracking-wide hover:bg-white/10 active:scale-95 transition-all duration-200">
            Browse All
          </button>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="relative hidden md:block w-1/2 overflow-hidden">

        {/* Beach Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
          alt="Summer beach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-[#1a8aaa]/55" />

        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-white/10 backdrop-blur-[2px]" />

        {/* Stat Card — Top Right */}
        <div
          className={`
            absolute top-10 right-10
            bg-white/10 backdrop-blur-md border border-white/20
            rounded-2xl px-6 py-4 text-center shadow-xl
            transition-all duration-700 delay-300
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <p className="text-[#f0a500] text-3xl font-bold tracking-tight">
            2,400+
          </p>
          <p className="text-white/80 text-xs font-semibold tracking-[0.14em] uppercase mt-1">
            Happy Customers
          </p>
        </div>

        {/* Stat Card — Bottom Right */}
        <div
          className={`
            absolute bottom-10 right-10
            bg-white/10 backdrop-blur-md border border-white/20
            rounded-2xl px-8 py-4 text-center shadow-xl
            transition-all duration-700 delay-500
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-[#f0a500] text-4xl font-bold tracking-tight">
            50%
          </p>
          <p className="text-white/80 text-xs font-semibold tracking-[0.14em] uppercase mt-1">
            Max Discount
          </p>
        </div>

      </div>
    </section>
  );
}