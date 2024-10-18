import AdminSidebarWrapper from "@/components/admin/AdminSidebarWrapper";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <AdminSidebarWrapper />
      <div className="main-content flex-1 overflow-y-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}
