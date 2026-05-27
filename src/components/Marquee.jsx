// src/components/marquee.jsx

// export default function Marquee() {
//   const items = [
//     "🏖️ Summer Sale",
//     "50% OFF",
//     "Beach Essentials",
//     "Free Shipping",
//     "Limited Time Offer",
//     "New Arrivals",
//     "Shop Now",
//     "2,400+ Happy Customers",
//   ];

//   return (
//     <div className="w-full bg-[#f0a500] py-3 overflow-hidden flex">
//       <div className="flex animate-marquee whitespace-nowrap">
//         {[...items, ...items].map((item, i) => (
//           <span
//             key={i}
//             className="text-[#0d3d4f] font-bold text-sm tracking-widest uppercase mx-8"
//           >
//             {item}
//             <span className="mx-8 opacity-40">✦</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }




export default function Marquee() {
  const items = [
    "🏖️ Summer Sale",
    "50% OFF",
    "Beach Essentials",
    "Free Shipping",
    "Limited Time Offer",
    "New Arrivals",
    "Shop Now",
    "2,400+ Happy Customers",
  ];

  return (
    <div style={{ width: "100%", background: "#f0a500", padding: "12px 0", overflow: "hidden", display: "flex" }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{ color: "#0d3d4f", fontWeight: "700", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 32px" }}
          >
            {item}
            <span style={{ margin: "0 32px", opacity: 0.4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}