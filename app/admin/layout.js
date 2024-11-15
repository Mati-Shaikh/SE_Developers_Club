import AdminSidebarWrapper from "@/components/admin/AdminSidebarWrapper";
import { routeGuard } from "../lib/routeGuard";

export default async function AdminLayout({ children }) {
  
  const { user } = await routeGuard("admin", "/");
  
  return (
      <div className="flex h-screen">
        <AdminSidebarWrapper />
        <div className="main-content flex-1 overflow-y-auto">
          <main>{children}</main>
        </div>
      </div>
  );
}
