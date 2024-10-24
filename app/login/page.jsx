"use client"

import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const { data: session, status } = useSession();

    const [error, setError] = useState(null);

    useEffect(() => {
        if (status === "authenticated") {
          router.push("/");
        }
    } ,[status, router]);


    return (
        <div className="h-[50vh] flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold text-[#6272A1] leading-snug">
                Login
            </h1>
            <button
                onClick={() => signIn('google')}
                className="flex items-center justify-center text-white bg-primary px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-200 "
            >
                <FaGoogle className="mr-2" />
                Connect with Google
            </button>
        </div>
    )
}

export default Login
