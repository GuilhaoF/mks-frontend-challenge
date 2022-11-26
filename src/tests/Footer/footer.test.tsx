import { renderWithProviders } from '../../utils/test-utils'
import { screen } from '@testing-library/react'
import Footer from '../../components/Footer'


test('testando se footer apresenta texto "MKS sistemas © Todos os direitos reservados" ', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByTitle('text-footer')).toBeInTheDocument()

})