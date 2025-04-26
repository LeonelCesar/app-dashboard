function SettingsPges() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-slate-600 text-xl">Configurações</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Informações da Conta</h2>
        <div className="bg-white text-slate-500 p-4 rounded shadow">
          <p>
            <strong>Nome</strong> Leonel Helder Costa
          </p>
          <p>
            <strong>E-mail</strong> leonelcesar62@gmail.com
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Preferências</h2>
        <div className="bg-white text-slate-500 p-4 rounded shadow">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="from-checkbox" />
            Receber notificações por email
          </label>
        </div>
      </section>
    </div>
  );
}

export default SettingsPges;
