// Página inicial do BornAgenda
// Esta será a landing pública futuramente

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          BornAgenda 🚀
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Plataforma de agendamento com perfil público e pagamento integrado.
        </p>

        <div className="mt-6">
          <button className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800">
            Começar
          </button>
        </div>
      </div>
    </main>
  );
}
