import getAuthSession from "@/app/lib/getAuthSession";

export default async function AdminMain() {

  const session = await getAuthSession();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl text-white font-bold">
        {
          session ? (`Hello  ${session.user.name}!`) : ("Loading...")
        }
      </p>
    </div>
  );
}
