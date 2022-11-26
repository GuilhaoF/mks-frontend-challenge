import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import ItemCart from '../../components/ItemCart'
import { addItem, decrementItem, removeItem, setupStore } from '../../redux/store'
import { renderWithProviders } from '../../utils/test-utils'
import { screen } from '@testing-library/react'

describe('Componente ItemCart', () => {

    const initialProducts = { id: 5, name: 'Buy Milk', price: 22, photo: '/svg.svg', brand: 'Melhor Smart', description: 'teste' }

    let store: ToolkitStore

    beforeAll(() => {
        store = setupStore()
        store.dispatch(addItem({ product: initialProducts }))
    })

    test('testando se esta incrementando item no cart', () => {

        renderWithProviders(<ItemCart product={store.getState()['cart'][0].product} quantity={store.getState()['cart'][0].quantity}  />, { store })
        screen.getByTestId('increment-button').click()

        expect(store.getState()['cart'].length).toEqual(1);
        expect(store.getState()['cart'][0].quantity).toEqual(2);
    })

     test('testando se esta decrementando item no cart', () => {

        renderWithProviders(<ItemCart product={store.getState()['cart'][0].product} quantity={store.getState()['cart'][0].quantity} />, { store })
        screen.getByTestId('decrement-button').click()

         expect(store.getState()['cart'].length).toEqual(1);
         expect(store.getState()['cart'][0].quantity).toEqual(1)

     })
     test('testando se esta removendo item do cart', () => {

        renderWithProviders(<ItemCart product={store.getState()['cart'][0].product} quantity={store.getState()['cart'][0].quantity} />, { store })
        screen.getByTestId('remove-button').click()

         expect(store.getState()['cart'].length).toEqual(0);

     })
})
