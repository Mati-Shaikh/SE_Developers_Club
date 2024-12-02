import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/User";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials"
import { Session } from "next-auth";
import createQueryParams from "./createQueryParams";

const departments = ["AI", "CS", "CYS", "DS", "SE"];

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "signIn",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@domain.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;

                const baseUrl = `${process.env.NEXTAUTH_URL}/api/UserApi/getUser?${createQueryParams({email})}`; // Endpoint for login

                try {
                    const response = await fetch(baseUrl, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.status === 401) {
                        throw new Error("Invalid email or password.");
                    }

                    if (response.status === 500) {
                        const result = await response.json();
                        throw new Error(result.error || "Internal Server Error");
                    }

                    const result = await response.json();
                    console.log(`Login Result: `, result);

                    const user = result.users;

                    if (!user || !user.email) {
                        throw new Error("User not found or incomplete user data received.");
                    }

                    if (user.password !== password) {
                        throw new Error("Password is incorrect");
                    }

                    // Ensure the result contains the necessary user information
                    const authenticatedUser = {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                    };

                    console.log("Returning User: ", authenticatedUser);

                    return authenticatedUser; // Return user object for successful login
                } catch (error) {
                    console.log(`Error: ${error}`);
                }

                return null; // Return null if any errors occur
            }
        }),
        // CredentialsProvider({
        //     name: "signUp",
        //     credentials: {
        //         name: { label: "Name", type: "text", placeholder: "John Doe", required: "true" },
        //         email: { label: "Email", type: "email", placeholder: "example@domain.com", required: "true" },
        //         rollno: { label: "Roll Number", type: "text", placeholder: "123456", required: "true" },
        //         password: { label: "Password", type: "password", required: "true" },
        //         confirmPassword: { label: "Confirm Password", type: "password", required: "true" },
        //         department: { label: "Department", type: "text", placeholder: "AI, CS, CYS, DS or SE", required: "true" , pattern: "^(AI|CS|CYS|DS|SE)$" }
        //     },
        //     async authorize(credentials, req) {

        //         const { name, email, rollno, password, confirmPassword, department } = credentials;

        //         if (password !== confirmPassword) {
        //             throw new Error("Passwords do not match");
        //         }

        //         const userCredentials = {
        //             name,
        //             email,
        //             rollno,
        //             password,
        //             department,
        //         };

        //         console.log("User Credentials: ", userCredentials);

        //         const baseUrl = `${process.env.NEXTAUTH_URL}/api/UserApi/saveUser`;

        //         try {
        //             // Make the fetch call to save the user
        //             const response = await fetch(baseUrl, {
        //                 method: "POST",
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 },
        //                 body: JSON.stringify(userCredentials) // Send the credentials object as JSON
        //             });
                    
        //             // Handle potential server errors
        //             if (response.status === 500) {
        //                 const result = await response.json();
        //                 throw new Error(result.error || "Internal Server Error");
        //             }      
                
        //             // Process the result
        //             const result = await response.json();
        //             console.log(`Result: `, result.user);

        //             const user = {
        //                 id: result.id,
        //                 name: result.name,
        //                 email: result.email,
        //                 department: result.department
        //             };

        //             return user;
        //         }
        //         catch (error) {
        //             console.log(`Error: ${error}`);
        //         }

        //         // Return true or handle success accordingly
        //         return null;
        //     }
        // }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // If user is logged in, add their info to the token
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }

            // console.log("Token: ", token);
            return token;
        },
        async session({ session, token } : { session: Session, token: any }) {
            // Include user data from the token into the session
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;

            // console.log("Session: ", session)
            return session;
        },
    } 
}