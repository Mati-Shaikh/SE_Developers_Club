import RegisTable from "@/components/admin/Registrations/regisTable";

export default function AdminRegistrations() {
    return (
      <div className="w-full p-5 space-y-4 h-screen">
        <div className="w-full text-2xl text-white font-bold">
          All SES Registrations
        </div>
        <RegisTable />
      </div>
  );
}
