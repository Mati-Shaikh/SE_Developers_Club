"use client"

import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const { data: session, status } = useSession();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const loginData = {
            name,
            email,
            password,
            department,
        }

        fetch("/api/UserApi/saveUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(loginData),
        }).then((data) => {
            console.log("user Saved", data);
        })
        .catch(ex => {
            setError(response.error);
        })
    };

    useEffect(() => {
        // if (status === "authenticated") {
        //   router.push("/admin");
        // }
    } ,[status, router]);
    
    const fetchUsers = async () => {
        const response = await fetch("/api/UserApi/getAllUsers");
        const result = await response.json();
    
        console.log(result);
    }
    
    useEffect(() => {
        
        fetchUsers();
    
    },[]);


    return (
        <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[#6272A1] leading-snug">
                Login
            </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}
                className='flex flex-col gap-3 items-center mt-10 h-[50vh] justify-center'
            >
                <div>
                    <label className="text-lg text-[#C0C7DC] max-w-xl">
                        Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            className='bg-transparent border-white border-2 rounded-lg'
                        />
                    </label>
                </div>
                <div>
                    <label className="text-lg text-[#C0C7DC] max-w-xl">
                        Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className='bg-transparent border-white border-2 rounded-lg'
                        />
                    </label>
                </div>
                <div>
                    <label className="text-lg text-[#C0C7DC] max-w-xl">
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className='bg-transparent border-white border-2 rounded-lg'
                        />
                    </label>
                </div>
                <div>
                    <label className="text-lg text-[#C0C7DC] max-w-xl">
                        Department:
                        <input 
                            type="text" 
                            value={department} 
                            onChange={(e) => setDepartment(e.target.value)} 
                            required 
                            className='bg-transparent border-white border-2 rounded-lg'
                        />
                    </label>
                </div>
                <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                    Sign In
                </button>
                <button 
                    onClick={() => signIn('google')} 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                    Connect with Google
                </button>
            </form>
        </div>
    )
}

export default Login
