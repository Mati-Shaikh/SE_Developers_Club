"use client"

import { signIn, signOut } from "next-auth/react";
import { FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {

  const { data: session, status } = useSession();

  const getUsers = async () => {

    console.log("Hello world");

    const baseUrl = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/UserApi/getUser`;

    console.log(baseUrl);

    try {
      // Make the fetch call to save the user
      const response = await fetch(baseUrl);
      
      // Handle potential server errors
      if (response.status === 500) {
          const result = await response.json();
          throw new Error(result.error || "Internal Server Error");
      }      
  
      // Process the result
      const result = await response.json();
      console.log(`Result: `, result);
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    
    // getUsers();
                
  },[]);

  return (
    <>
      {!session ? (
        <button
            onClick={() => signIn("credentials", { callbackUrl: "/admin"})}
            // className="flex bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
        >
            {/* <FaUserPlus className="mr-2 text-2xl" /> */}
            Sign In 
        </button>
      ) : (
        <button
            onClick={() => signOut()}
            // className="flex bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
        >
            {/* <FaSignOutAlt className="mr-2 text-2xl" /> */}
            Sign Out
        </button>
      )}
        {/* <p>{JSON.stringify(session)}</p> */}
    </>
  );
}
