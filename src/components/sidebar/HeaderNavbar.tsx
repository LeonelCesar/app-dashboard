import { CheckSquare, Package, Search, Settings, User } from "lucide-react";
import { Link } from "react-router";
import Footer from "./Footer";

function HeaderNavbar() {
  return (
    <aside className="sticky bg-slate-900 h-screen">
      <button className="flex p-0.5 hover:bg-slate-950 rounded transition-colors gap-2 w-full items-center">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://avatars.githubusercontent.com/u/149327611?v=4"
          alt="Avatar"
        />
        <div className="text-start">
          <span className="text-sm font-semibold block">Leonel Hélder</span>
          <span className="text-sm font-thin">leonelcesar62@gmail.com</span>
        </div>
      </button>
      <div className="relative w-full mt-4">
        <input
          type="text"
          placeholder="Pesquisa"
          className="w-full bg-slate-800 text-sm text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-sky-500"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
      </div>

      <div className="flex flex-col mt-4">
        <Link
          to="/dashpage"
          className="flex  gap-6 hover:text-sky-400  pl-10 pr-4 py-2"
        >
          <CheckSquare className="w-4 h-4" />
          <span className="text-sm font-light">Dashboard Tasks</span>
        </Link>
        <Link
          to="/packge"
          className="flex  gap-6 hover:text-sky-400  pl-10 pr-4 py-2"
        >
          <Package className="w-4 h-4" />
          <span className="text-sm font-light">Packge</span>
        </Link>
        <Link
          to="/users"
          className="flex gap-6 hover:text-sky-400  pl-10 pr-4 py-2"
        >
          <User className="w-4 h-4" />
          <span className="text-sm font-light">Users</span>
        </Link>
        <Link
          to="/settings"
          className="flex  gap-6 hover:text-sky-400  pl-10 pr-4 py-2"
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm font-light">Settings</span>
        </Link>
      </div>

      <div className="flex flex-col justify-between mt-20">
        <Footer />
      </div>
    </aside>
  );
}

export default HeaderNavbar;
