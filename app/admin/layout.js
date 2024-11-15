import AdminSidebarWrapper from "@/components/admin/AdminSidebarWrapper";
import SessionWrapper from "@/components/auth/SessionWrapper";

export default async function AdminLayout({ children }) {
  return (
    <SessionWrapper>
      <div className="flex h-screen">
        <AdminSidebarWrapper />
        <div className="main-content flex-1 overflow-y-auto">
          <main>{children}</main>
        </div>
      </div>
    </SessionWrapper>
  );
}
