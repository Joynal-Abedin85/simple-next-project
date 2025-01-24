"use client";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


// export async function getServerSideProps() {
//     const { getUser } = getKindeServerSession();
  
//     // Fetch user data server-side
//      // Get user data
//   let user = null;
//   try {
//     user = await getUser(); // This will run server-side
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//   }
  
//     return {
//       props: { user }, // Pass user data to the component as a prop
//     };
//   }

export default    function Navbar({user}){

console.log(user)

    // const {getUser} = getKindeServerSession()

    // const user = await getUser()
    // console.log(user)

    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Links */}
            <div className="flex items-center">
              <div className="text-white text-lg font-bold">MyApp</div>
              <div className="ml-10 flex space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </a>
              </div>
            </div>
  
            {/* Authentication Button */}
            <div>
            {user ? (
              <Link
                href="/api/auth/logout"
                className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </Link>
            ) : (
              <Link
                href="/api/auth/login"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
          </div>
        </div>
      </nav>
    );
  }