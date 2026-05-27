// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="border-b px-2">
//       <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
//         <div className="flex gap-2 items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             loading="eager"
//             width={30}
//             height={30}
//             className="object-cover h-auto w-auto"
//           />
//           <h3 className="font-black text-lg">suncart.</h3>
//         </div>

//         <ul className="flex items-center gap-5 text-sm">
//           <li>
//             <Link href={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link href={"/all-photos"}>All Photos</Link>
//           </li>
//           <li>
//             <Link href={"/pricing"}>Pricing</Link>
//           </li>
//           <li>
//             <Link href={"/profile"}>Profile</Link>
//           </li>
//         </ul>

//         <div className="flex gap-4">
//           <ul className="flex items-center  text-sm">
//             <li>
//               <Link href={"/signup"}>SignUp</Link>
//             </li>
//             <li>
//               <Link href={"/signin"}>SignIn</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;





// "use client";
// import Link from "next/link";

// const Navbar = () => {
  
//   const user = null; 

//   return (
//     <div className="navbar bg-base-100 shadow-md px-4 md:px-8 animate__animated animate__fadeInDown">
//       <div className="navbar-start">
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           SunCart
//         </Link>
//       </div>
      
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 font-semibold">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/products">Products</Link></li>
          
//           {user && <li><Link href="/profile">My Profile</Link></li>}
//         </ul>
//       </div>

//       <div className="navbar-end gap-4">
//         {user ? (
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full border-2 border-orange-400">
//                 <img alt="User profile" src="https://via.placeholder.com/150" />
//               </div>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//               <li><Link href="/profile">Profile</Link></li>
//               <li><button className="text-red-500 font-bold">Logout</button></li>
//             </ul>
//           </div>
//         ) : (
//           <Link href="/login" className="btn bg-orange-500 text-white hover:bg-orange-600 border-none px-6">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;








// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   const user = null;

//   return (
//     <div className="border-b px-2 shadow-md bg-base-100">
//       <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

//         {/* LEFT - LOGO */}
//         <div className="flex items-center gap-2">

//           {/* Logo Box (FIXED for visibility) */}
//           <div className="w-10 h-10 relative flex items-center justify-center">
//             <Image
//               src="/logo.png"
//               alt="SunCart Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>

//           {/* Brand Name */}
//           <Link href="/" className="text-2xl font-bold text-orange-500">
//             SunCart
//           </Link>
//         </div>

//         {/* CENTER LINKS */}
//         <ul className="hidden lg:flex items-center gap-6 font-semibold text-sm">
//           <li>
//             <Link href="/">Home</Link>
//           </li>

//           <li>
//             <Link href="/products">Products</Link>
//           </li>

//           {user && (
//             <li>
//               <Link href="/profile">My Profile</Link>
//             </li>
//           )}
//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-3">

//           {user ? (
//             <div className="dropdown dropdown-end">
//               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full border-2 border-orange-400 overflow-hidden">
//                   <img src="https://via.placeholder.com/150" alt="user" />
//                 </div>
//               </div>

//               <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 <li>
//                   <Link href="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <button className="text-red-500 font-bold">Logout</button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <Link
//                 href="/login"
//                 className="btn bg-orange-500 text-white hover:bg-orange-600 border-none px-6"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6"
//               >
//                 Register
//               </Link>
//             </>
//           )}

//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




// "use client";

// import Link from "next/link";
// import { FaShoppingCart } from "react-icons/fa";  
// const Navbar = () => {
//   const user = null; 

//   return (
//     <div className="border-b px-2 shadow-md bg-base-100">
//       <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

//         {/* LEFT - LOGO */}
//         <div className="flex items-center gap-2">
//           {/* Logo Icon */}
//           <div className="text-orange-500">
//             <FaShoppingCart size={28} />
//           </div>

//           {/* Brand Name */}
//           <Link href="/" className="text-2xl font-bold text-orange-500">
//             SunCart
//           </Link>
//         </div>

//         {/* CENTER LINKS */}
//         <ul className="hidden lg:flex items-center gap-6 font-semibold text-sm">
//           <li>
//             <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
//           </li>
//           <li>
//             <Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link>
//           </li>
//           {user && (
//             <li>
//               <Link href="/profile">My Profile</Link>
//             </li>
//           )}
//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-3">
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full border-2 border-orange-400 overflow-hidden">
//                   <img src="https://via.placeholder.com/150" alt="user" />
//                 </div>
//               </div>
//               <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 <li><Link href="/profile">Profile</Link></li>
//                 <li><button className="text-red-500 font-bold">Logout</button></li>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <Link
//                 href="/login"
//                 className="btn bg-orange-500 text-white hover:bg-orange-600 border-none px-6"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/register"
//                 className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const user = null;

  return (
    <div className="border-b px-2 shadow-md bg-base-100">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="text-orange-500">
            <FaShoppingCart size={28} />
          </div>
          <Link href="/" className="text-2xl font-bold text-orange-500">
            SunCart
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-6 font-semibold text-sm">
          <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/login" className="btn bg-orange-500 text-white hover:bg-orange-600 border-none px-6">Login</Link>
          <Link href="/register" className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6">Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;