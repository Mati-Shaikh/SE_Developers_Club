import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import createQueryParams from "@/lib/createQueryParams";

const getUser = async (email) => {

    const baseUrl = `${process.env.NEXTAUTH_URL}/api/UserApi/getUser?${createQueryParams({email})}`;

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

        return user; 
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    return null;
}

export async function routeGuard(requiredRole, failureRedirect) {

    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
        redirect(failureRedirect);
    }

    const user = await getUser(session.user.email);

    console.log(user);

    if (!user || user.role !== requiredRole) {
        redirect(failureRedirect);
    }

    return session;
}