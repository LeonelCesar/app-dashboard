import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
 
 function Users() {
  const [users] = useState<User[]>([
    { id: 1, name: "Leonel César", email: "leonelcesar62@gmail.com" },
    { id: 2, name: "Eloa Maria César", email: "eloamariacesar123@email.com" },
    { id: 3, name: "Lanira Reis Neves", email: "laniraneves@gmail.com"},
    { id: 4, name: "António Liquine César", email: "antonioliquine908@gmail,com" },
    { id: 5, name: "Roque Valente", email: "roquevalente@gmail.com" },
    { id: 6, name: "Walter Panhanaha", email: "walterpanhanha567@gmail.com" },
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-slate-900">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users; 
