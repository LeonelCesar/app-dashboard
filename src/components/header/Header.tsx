import { Search, Bell, User } from "lucide-react";

function Header() {
  return (
    <div className="h-full">
      <header className="w-full bg-slate-900 px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Visão Geral
        </h1>
        <div className="text-xl font-bold text-white tracking-wide">
          <h2>DasboardPro</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisa"
              className="bg-slate-800 text-sm text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-sky-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>

          <button className="text-slate-300 hover:text-white">
            <Bell className="w-5 h-5" />
          </button>
          <div className="bg-slate-700 p-2 rounded-full">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;



