import EventsTable from "@/components/admin/Events/EventsTable";
import NewEvent from "@/components/admin/Events/NewEvent";

export default function AdminEvents() {
  return (
    <div className="w-full p-5 space-y-4 h-screen relative">
      <div className="w-full text-2xl text-white font-bold">All SES Events</div>
      <EventsTable />
      <NewEvent />
    </div>
  );
}
