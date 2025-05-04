import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function LoginLogout() {
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<User>>({});
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<User> = {};

    if (!form.firstName.trim()) newErrors.firstName = "O nome é obrigatório.";
    if (!form.lastName.trim())
      newErrors.lastName = "O sobrenome é obrigatório.";
    if (!form.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "O email não é válido.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setUser(form);
      localStorage.setItem("user", JSON.stringify(form));
      navigate("/");
    } else {
      setFormError("Por favor, corrija os erros antes de continuar.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (user) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
        <h2 className="text-xl font-bold">
          Bem-vindo, {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleLogin}
      className="p-6 max-w-lg mx-auto bg-white rounded-xl text-slate-800 shadow space-y-4"
    >
      {formError && (
        <div className="text-red-600 font-semibold">{formError}</div>
      )}

      <div>
        <input
          type="text"
          placeholder="Primeiro Nome"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.firstName && (
          <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Último Nome"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.lastName && (
          <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  );
}
