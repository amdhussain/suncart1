// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 20s linear infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//     },
//   },
//   plugins: [require("daisyui")], // যদি daisyUI ব্যবহার করেন
// }



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'marquee': 'marquee 20s linear infinite',
//       },
//       keyframes: {
//         'marquee': {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'marquee': 'marquee 15s linear infinite',
//       },
//       keyframes: {
//         'marquee': {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }



// 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};