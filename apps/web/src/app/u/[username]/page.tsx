// Página pública de perfil
// Exemplo: /u/joaosilva

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export default async function PerfilPublico({ params }: Props) {
  const { username } = await params;

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-gray-800">
          @{username}
        </h1>

        <p className="mt-4 text-gray-600">
          Perfil público do profissional no BornAgenda.
        </p>

        <div className="mt-6 rounded-xl bg-gray-200 p-4">
          ⭐ Avaliação: 5.0 (em breve dinâmica)
        </div>
      </div>
    </main>
  );
}
