// Layout global do BornAgenda
// Estrutura base aplicada em todas as páginas

import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BornAgenda',
  description: 'Rede social de serviços com agendamento e pagamento integrado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white px-6 py-4 shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <h1 className="text-xl font-bold">BornAgenda</h1>

          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link href="/u/teste" className="hover:underline">
              Perfil Exemplo
            </Link>
          </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t bg-white p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BornAgenda. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
