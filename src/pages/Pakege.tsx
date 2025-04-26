function Packge() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Pacotes e Planos</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Seu Plano Atual</h2>
        <div className="bg-white text-slate-700 p-4 rounded shadow">
          <p>
            <strong>Plano:</strong> Gratuito
          </p>
          <p>
            <strong>Limite de usuários:</strong> 5 usuários
          </p>
          <p>
            <strong>Espaço de armazenamento:</strong> 1 GB
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Upgrade de Plano</h2>
        <div className="bg-white text-slate-700 p-4 rounded shadow flex flex-col gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Profissional</h3>
            <p>Até 50 usuários, 50 GB de armazenamento.</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Escolher
            </button>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-bold">Empresarial</h3>
            <p>Usuários ilimitados, 500 GB de armazenamento.</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Escolher
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packge;
