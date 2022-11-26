import { renderWithProviders } from '../../utils/test-utils'
import { screen } from '@testing-library/react'
import { addItem, setupStore } from '../../redux/store'
import Cards from '../../components/Cards'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'


describe("Componente Card", () => {
    const initialProducts = { id: 5, name: 'Buy Milk', price: 22, photo: '/svg.svg', brand: 'Melhor Smart', description: 'teste' }
    let store: ToolkitStore;

    beforeAll(() => {
        store = setupStore()
    })

    test('Ao clicar em comprar o produto deve ser adicionado ao estado de cart', () => {
        renderWithProviders(<Cards product={initialProducts} />, { store })
        screen.getByTestId("add-cart").click()

        expect(store.getState()['cart'].length).toEqual(1)
        expect(store.getState()['cart'][0].quantity).toEqual(1)
        expect(store.getState()['cart'][0]).toEqual({ product: { ...initialProducts }, quantity: 1 })
    })
})