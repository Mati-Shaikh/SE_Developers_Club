import EventsTable from "@/components/admin/Events/EventsTable";

export default function AdminEvents() {
  return (
    <div className="w-full p-5 space-y-4 h-screen">
      <div className="w-full text-2xl text-white font-bold">All SES Events</div>
      <EventsTable />
    </div>
  );
}
