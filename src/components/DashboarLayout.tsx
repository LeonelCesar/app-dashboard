import Header from "./../components/header/Header";
import HeaderNavbar from "./sidebar/HeaderNavbar";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <main className="w-full h-full bg-slate-950 text-stone-50">
      <div className="flex">
        <div className="w-[300px] sticky p-2 bg-slate-900">
          <HeaderNavbar />
        </div>

        <div className="flex-auto flex flex-col">
          <div className="sticky">
            <Header />
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;