import { BarChart, CalendarDays, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const recentUsers = [
  { name: "Eloa Maria", email: "eloa678@email.com", date: "12 Abr" },
  { name: "António Liquine", email: "antonio456@email.com", date: "11 Abr" },
  { name: "Leonel César", email: "leonelcesar@email.com", date: "10 Abr" },
];

function DashboardSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pb-10">
      <motion.div
        className="bg-slate-800 rounded-2xl shadow-md p-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart className="w-5 h-5 text-indigo-500" />
          <h3 className="text-lg font-semibold text-slate-400">
            Desempenho semanal
          </h3>
        </div>
        <div className="w-full h-40 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 rounded-xl flex items-end justify-between p-4">
          {[60, 90, 40, 70, 80, 50, 100].map((value, i) => (
            <div
              key={i}
              className="w-4 bg-indigo-500 rounded"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2 px-1">
          <span>Seg</span>
          <span>Ter</span>
          <span>Qua</span>
          <span>Qui</span>
          <span>Sex</span>
          <span>Sáb</span>
          <span>Dom</span>
        </div>
      </motion.div>

      {/*   Tabela de usuarios */}

      <motion.div
        className="bg-slate-800 rounded-2xl shadow-md p-6"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <UserRound className="w-5 h-5 text-emerald-500" />
          <h3 className="text-lg font-semibold text-slate-400">
            Usuários Recentes
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentUsers.map((user, index) => (
            <li key={index} className="py-3 flex justify-between items-center">
              <div>
                <p className="text-slate-200 font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <CalendarDays className="w-4 h-4" />
                <span>{user.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default DashboardSection;
