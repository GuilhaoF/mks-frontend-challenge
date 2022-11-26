import { getAllByAltText, screen, } from '@testing-library/react'


import Header from '../../components/Header'
import { renderWithProviders } from '../../utils/test-utils'



test('testando se o header tem botao de carrinho correctamente', () => {
  renderWithProviders(<Header onOpenCartModal={() => { }} />)

  expect(screen.getByTestId('cart-button')).toBeInTheDocument()
})

test('Testa se  header apresenta icone com carrinho com alt "carrinho de produtos" ', () => {
  renderWithProviders(<Header onOpenCartModal={() => { }} />)

  expect(screen.getAllByAltText('carrinho de produtos')).toBeInTheDocument
})


