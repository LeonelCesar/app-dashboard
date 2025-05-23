import { NavLink } from "react-router";
import { LogOut, Home } from "lucide-react";

function Footer() {
  const handleLogout = () => {

  };

  return (
    <div className="border-t">
      <NavLink
        to="/"
        className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-800 px-3 py-2 rounded hover:bg-blue-100"
      >
        <Home size={16} /> 
        Ir para Início
      </NavLink>

      <NavLink
       to="/login"
      >
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-600 text-sm hover:text-red-800 px-3 py-2 rounded hover:bg-red-100"
      >
        
        <LogOut size={16} /> 
          Sair
      </button>
      </NavLink>
   
    </div>
  );
}

export default Footer;
