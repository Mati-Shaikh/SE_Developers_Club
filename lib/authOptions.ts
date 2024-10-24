import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/User";

const createQueryParams = (params) => {
    const searchParams = new URLSearchParams(params);
    return searchParams.toString();
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,      
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log("User: ", user);
            const { name, email } = user;

            const credentials = {
                name,
                email,
                password: "google-auth",
            };

            // console.log("Credentials: ", credentials);

            const baseUrl = `${process.env.BASE_URL}/api/UserApi/saveUser`;
            // console.log(`Base url: ${baseUrl}`);

            try {
                const response = await fetch(baseUrl, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials)
                });
                
                if (response.status === 500) {
                    const result = await response.json();
                    throw new Error(result.error || "Internal Server Error");
                }      

                const result = await response.json();
                console.log(`Result: `, result);
            }
            catch (error) {
                console.log(`Error: ${error}`);
            }

            return true;
        }
    }
    
}