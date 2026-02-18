// Teste da página inicial do BornAgenda
// Verifica se o título principal aparece corretamente

import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Página inicial - BornAgenda', () => {
  it('deve renderizar o título BornAgenda', () => {
    render(<Home />);

    const titulo = screen.getByText(/BornAgenda/i);
    expect(titulo).toBeInTheDocument();
  });
});
