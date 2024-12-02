import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions";

const getAuthSession = async () => {
    const session = await getServerSession(authOptions);

    return session;
}

export default getAuthSession;