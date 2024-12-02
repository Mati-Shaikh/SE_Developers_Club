import NewWorkshop from "@/components/admin/WorkShops/NewWks";
import WksTable from "@/components/admin/WorkShops/WksTable";

export default function AdminWorkshops() {
  return (
    <div className="w-full p-5 space-y-4 h-screen relative">
      <div className="w-full text-2xl text-white font-bold">
        All SES Workshops
      </div>
      <WksTable />
      <NewWorkshop />
    </div>
  );
}
